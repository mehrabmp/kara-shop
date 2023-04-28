import { z } from 'zod';
import {
  CollectionType,
  Prisma,
  ProductColor,
  ProductSize,
} from '@prisma/client';
import { publicProcedure, createTRPCRouter } from '../trpc';
import { defaultCollectionSelect } from './collection';

const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  price: true,
  rate: true,
  images: {
    select: {
      imageURL: true,
      imageBlur: true,
    },
  },
  types: true,
  collection: {
    select: defaultCollectionSelect,
  },
});

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        types: z.nativeEnum(CollectionType).optional(),
        slug: z.string().optional(),
        page: z.number().optional(),
        rate: z.number().optional(),
        gte: z.number().optional(),
        lte: z.number().optional(),
        sizes: z.nativeEnum(ProductSize).array().optional(),
        colors: z.nativeEnum(ProductColor).array().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const {
        types = 'MEN',
        slug,
        page = 1,
        rate = 0,
        gte = 0,
        lte = 1000000,
        sizes = [],
        colors = [],
      } = input;

      const take = 12;
      const skip = take * (page - 1);

      const where: Prisma.ProductWhereInput = {
        types: { hasSome: [types] },
        published: true,
        rate: rate ? { gte: rate } : undefined,
        price: { gte, lte },
        sizes: sizes.length > 0 ? { hasSome: sizes } : undefined,
        colors: colors.length > 0 ? { hasSome: colors } : undefined,
      };

      if (slug) {
        const isParent = await ctx.prisma.collection.findFirst({
          where: {
            slug,
            parent: {
              is: null,
            },
          },
        });

        where.collection = isParent ? { parentId: isParent.id } : { slug };
      }

      const [products, totalCount] = await ctx.prisma.$transaction([
        ctx.prisma.product.findMany({
          select: defaultProductSelect,
          where,
          orderBy: { id: 'asc' },
          take,
          skip,
        }),
        ctx.prisma.product.count({ where }),
      ]);

      return {
        products,
        totalCount,
      };
    }),
});

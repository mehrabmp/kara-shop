import { z } from 'zod';
import {
  CollectionType,
  Prisma,
  ProductColor,
  ProductSize,
} from '@prisma/client';
import { publicProcedure, router } from '../trpc';
import {
  defaultCollectionSelect,
  defaultSubCollectionSelect,
} from './collection';

const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  createdAt: true,
  title: true,
  description: true,
  price: true,
  rate: true,
  images: {
    select: {
      imageURL: true,
      imageBlur: true,
    },
  },
  type: true,
  collection: {
    select: defaultCollectionSelect,
  },
  subCollection: {
    select: defaultSubCollectionSelect,
  },
});

export const productRouter = router({
  all: publicProcedure
    .input(
      z.object({
        type: z.nativeEnum(CollectionType).optional(),
        slug: z.string().optional(),
        page: z.number().optional(),
        rate: z.number().optional(),
        gte: z.number().optional(),
        lte: z.number().optional(),
        size: z.nativeEnum(ProductSize).array().optional(),
        color: z.nativeEnum(ProductColor).array().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const {
        type = 'MEN',
        slug,
        page = 1,
        rate = 0,
        gte = 0,
        lte = 1000000,
        size = [],
        color = [],
      } = input;

      const take = 10;
      const skip = take * (page - 1);

      return await ctx.prisma.product.findMany({
        select: defaultProductSelect,
        where: {
          type: { hasSome: type },
          OR: [
            {
              collection: {
                slug: { equals: slug },
              },
            },
            {
              subCollection: {
                slug: { equals: slug },
              },
            },
          ],
          published: true,
          rate: rate ? { gte: rate } : undefined,
          price: { gte, lte },
          size: size.length > 0 ? { hasSome: size } : undefined,
          color: color.length > 0 ? { hasSome: color } : undefined,
        },
        orderBy: { id: 'asc' },
        take,
        skip,
      });
    }),
});

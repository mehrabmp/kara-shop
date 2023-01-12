import { z } from 'zod';
import { Prisma, ProductColor, ProductSize } from '@prisma/client';
import { publicProcedure, router } from '../trpc';

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
    select: {
      id: true,
      title: true,
      slug: true,
    },
  },
  subCollection: {
    select: {
      id: true,
      title: true,
      slug: true,
      type: true,
    },
  },
});

export const productRouter = router({
  all: publicProcedure
    .input(
      z.object({
        page: z.number().optional(),
        rate: z.number().optional(),
        gte: z.number().optional(),
        lte: z.number().optional(),
        size: z.nativeEnum(ProductSize).array().optional(),
        color: z.nativeEnum(ProductColor).array().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { page = 1, rate, gte = 0, lte = 1000000, size, color } = input;

      const take = 10;
      const skip = take * (page - 1);

      const products = await ctx.prisma.product.findMany({
        select: defaultProductSelect,
        where: {
          published: true,
          rate: rate ? { gte: rate } : undefined,
          price: { gte, lte },
          size: size ? { hasSome: size } : undefined,
          color: color ? { hasSome: color } : undefined,
        },
        orderBy: { id: 'asc' },
        take,
        skip,
      });
      return products;
    }),
});

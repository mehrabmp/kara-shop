import { Prisma } from '@prisma/client';
import { z } from 'zod';
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
    },
  },
  subCollection: {
    select: {
      id: true,
      title: true,
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
        price: z.string().optional(),
        size: z.array(z.string()).optional(),
        color: z.array(z.string()).optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { page = 0, rate, price = '', size, color } = input;

      const take = 10;
      const skip = page * take;

      const priceFilter = price
        ? {
            gte: price === '$' ? 1 : price === '$$' ? 10 : 100,
            lte: price === '$' ? 9 : price === '$$' ? 99 : undefined,
          }
        : {};

      return ctx.prisma.product.findMany({
        select: defaultProductSelect,
        where: {
          published: true,
          rate: {
            gte: rate,
          },
          price: priceFilter,
        },
        take,
        skip,
      });
    }),
});

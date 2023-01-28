import { createTRPCRouter, publicProcedure } from '../trpc';
import { Prisma } from '@prisma/client';

export const defaultSubCollectionSelect =
  Prisma.validator<Prisma.SubCollectionSelect>()({
    id: true,
    title: true,
    slug: true,
    type: true,
  });

export const defaultCollectionSelect =
  Prisma.validator<Prisma.CollectionSelect>()({
    id: true,
    title: true,
    slug: true,
    subCollections: {
      select: defaultSubCollectionSelect,
    },
  });

export const collectionRouter = createTRPCRouter({
  all: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.collection.findMany({
        select: defaultCollectionSelect,
        orderBy: { id: 'asc' },
      })
  ),
});

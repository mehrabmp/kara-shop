import { router, publicProcedure } from '../trpc';
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

export const collectionRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const collections = await ctx.prisma.collection.findMany({
      select: defaultCollectionSelect,
      orderBy: { id: 'asc' },
    });
    return collections;
  }),
});

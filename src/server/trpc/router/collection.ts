import { router, publicProcedure } from '../trpc';
import { Prisma } from '@prisma/client';
import { prisma } from 'server/db/prisma';

const defaultCollectionSelect = Prisma.validator<Prisma.CollectionSelect>()({
  id: true,
  title: true,
  slug: true,
  subCollections: {
    select: {
      id: true,
      title: true,
      slug: true,
      type: true,
    },
  },
});

export const collectionRouter = router({
  all: publicProcedure.query(async () => {
    return await prisma.collection.findMany({
      select: defaultCollectionSelect,
      orderBy: {
        id: 'asc',
      },
    });
  }),
});

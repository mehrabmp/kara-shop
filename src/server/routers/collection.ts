import { Prisma } from '@prisma/client';
import { createRouter } from 'server/createRouter';
import { prisma } from 'server/prisma';

const defaultCollectionSelect = Prisma.validator<Prisma.CollectionSelect>()({
  id: true,
  title: true,
  subCollections: true,
  createdAt: true,
  updatedAt: true,
});

export const collectionRouter = createRouter().query('all', {
  async resolve() {
    return prisma.collection.findMany({
      select: defaultCollectionSelect,
      orderBy: {
        id: 'asc',
      },
    });
  },
});

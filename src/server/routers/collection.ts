import { t } from '../trpc';
import { Prisma } from '@prisma/client';
import { prisma } from 'server/prisma';

/**
 * Default selector for Collection.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultCollectionSelect = Prisma.validator<Prisma.CollectionSelect>()({
  id: true,
  title: true,
  subCollections: {
    select: {
      id: true,
      title: true,
      type: true,
    },
  },
});

export const collectionRouter = t.router({
  all: t.procedure.query(() =>
    prisma.collection.findMany({
      select: defaultCollectionSelect,
      orderBy: {
        id: 'asc',
      },
    })
  ),
});

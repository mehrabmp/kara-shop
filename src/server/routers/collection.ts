import { t } from '../trpc';
import { Prisma } from '@prisma/client';
import { prisma } from 'server/prisma';
// import { TRPCError } from '@trpc/server';
// import { z } from 'zod';

/**
 * Default selector for Collection.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultCollectionSelect = Prisma.validator<Prisma.CollectionSelect>()({
  id: true,
  title: true,
  subCollections: true,
  createdAt: true,
  updatedAt: true,
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

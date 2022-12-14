import { router, publicProcedure } from '../trpc';
import { CollectionType, Prisma } from '@prisma/client';
import { prisma } from 'server/db/prisma';

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

export interface Collection {
  id: number;
  title: string;
  subCollections: {
    id: number;
    title: string;
    type: CollectionType[];
  }[];
}

export const collectionRouter = router({
  all: publicProcedure.query(async () => {
    const collections: Collection[] = await prisma.collection.findMany({
      select: defaultCollectionSelect,
      orderBy: {
        id: 'asc',
      },
    });

    return {
      men: getCollectionsByType(collections, 'MEN'),
      women: getCollectionsByType(collections, 'WOMEN'),
    };
  }),
});

const getCollectionsByType = (
  collections: Collection[],
  type: CollectionType
) =>
  collections.map(collection => ({
    id: collection.id,
    title: collection.title,
    type,
    subCollections: collection.subCollections.filter(subCollection =>
      subCollection.type.includes(type)
    ),
  }));

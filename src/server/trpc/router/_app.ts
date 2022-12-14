/**
 * This file contains the root router of your tRPC-backend
 */
import { t } from '../trpc';
import { collectionRouter } from './collection';

export const appRouter = t.router({
  collection: collectionRouter,
});

export type AppRouter = typeof appRouter;

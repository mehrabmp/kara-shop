/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { collectionRouter } from './collection';

export const appRouter = router({
  collection: collectionRouter,
});

export type AppRouter = typeof appRouter;

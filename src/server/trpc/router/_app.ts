/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc';
import { collectionRouter } from './collection';
import { productRouter } from './product';

export const appRouter = router({
  collection: collectionRouter,
  product: productRouter,
});

export type AppRouter = typeof appRouter;

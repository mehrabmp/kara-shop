import { createRouter } from '../createRouter';
import superjson from 'superjson';
import { collectionRouter } from './collection';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('collection.', collectionRouter);

export type AppRouter = typeof appRouter;

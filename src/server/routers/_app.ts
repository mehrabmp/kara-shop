import { createRouter } from '../createRouter';
import superjson from 'superjson';

export const appRouter = createRouter().transformer(superjson);

export type AppRouter = typeof appRouter;

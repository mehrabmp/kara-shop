import { inferProcedureOutput } from '@trpc/server';
import { AppRouter } from 'server/routers/_app';

export type Collections =
  | inferProcedureOutput<AppRouter['collection']['all']>
  | undefined;

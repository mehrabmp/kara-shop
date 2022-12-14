import { inferProcedureOutput } from '@trpc/server';
import { AppRouter } from 'server/trpc/router/_app';

export type Collections =
  | inferProcedureOutput<AppRouter['collection']['all']>
  | undefined;

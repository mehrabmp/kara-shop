import { RouterOutputs } from 'utils/trpc';

export type Collections = RouterOutputs['collection']['all'] | undefined;

export type Product = RouterOutputs['product']['all']['products'][0];

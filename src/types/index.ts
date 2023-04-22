import { RouterOutputs } from '@/utils/api';

export type Collections = RouterOutputs['collection']['all'];

export type Product = RouterOutputs['product']['all']['products'][0];

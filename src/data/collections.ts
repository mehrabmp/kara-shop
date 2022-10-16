import { Prisma } from '@prisma/client';

export const collections: Prisma.CollectionCreateManyInput[] = [
  { id: 1, title: 'Shoes' },
  { id: 2, title: 'Clothing' },
  { id: 3, title: 'Accessories' },
  { id: 4, title: 'Shop By Sport' },
  { id: 5, title: 'Shop By Collection' },
];

import { Prisma } from '@prisma/client';

export const collections: Prisma.CollectionCreateManyInput[] = [
  { id: 1, title: 'Shoes', slug: 'shoes' },
  { id: 2, title: 'Clothing', slug: 'clothing' },
  { id: 3, title: 'Accessories', slug: 'accessories' },
  { id: 4, title: 'Shop By Sport', slug: 'sport' },
  { id: 5, title: 'Shop By Collection', slug: 'collection' },
];

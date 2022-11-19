import { PrismaClient } from '@prisma/client';
import { collections, products, subCollections } from '../src/data';

const prisma = new PrismaClient();

async function main() {
  const createCollections = prisma.collection.createMany({
    data: collections,
  });

  const createSubCollections = prisma.subCollection.createMany({
    data: subCollections,
  });

  const createProducts = prisma.product.createMany({
    data: products,
  });

  await prisma.$transaction([
    createCollections,
    createSubCollections,
    createProducts,
  ]);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

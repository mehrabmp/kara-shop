import { PrismaClient } from '@prisma/client';
import { collections, products } from '../src/data';

const prisma = new PrismaClient();

async function main() {
  const createCollections = prisma.collection.createMany({
    data: collections,
  });

  await prisma.$transaction([createCollections]);

  for (const p of products) {
    await prisma.product.create({
      data: p,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

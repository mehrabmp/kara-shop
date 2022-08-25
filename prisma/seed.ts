import { PrismaClient } from '@prisma/client';
import { collections } from 'data';

const prisma = new PrismaClient();

async function main() {
  await prisma.collection.createMany({
    data: collections,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

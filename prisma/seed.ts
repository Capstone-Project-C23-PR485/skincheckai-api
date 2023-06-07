import { PrismaClient } from '@prisma/client';
import seedProducts from './seeds/products_seeder';
const prisma = new PrismaClient();

async function main() {
  await seedProducts(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

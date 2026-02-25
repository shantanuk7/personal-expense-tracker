// prisma/seed.js

import { PrismaClient } from '@prisma/client';

import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: parseInt(process.env.DATABASE_PORT || '3306'),
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('SEEDING STARTED...');

  const user = await prisma.user.upsert({
    where: { email: 'user@gmail.com' },
    update: {},
    create: {
      email: 'user@gmail.com',
      name: 'User',
    },
  });
  console.log(`Created user: ${user.name}`);

  const categories = ['EMI', 'FOOD', 'TRANSPORT', 'HEALTHCARE', 'RENT', 'OTHER'];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { category_name: category },
      update: {},
      create: { category_name: category },
    });
  }

  console.log('SEEDING COMPLETED.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
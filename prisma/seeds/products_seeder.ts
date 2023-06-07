import { PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse';
import * as fs from 'fs';

export default async function seedProducts(prismaClient: PrismaClient) {
  const parser = parse({ delimiter: ',', from_line: 2 });
  fs.createReadStream(__dirname + '/products.csv')
    .pipe(parser)
    .on('data', async (row) => {
      await prismaClient.skinCareProduct.create({
        data: {
          name: row[1],
          brand: row[2],
          type: row[0],
          price: parseInt(row[4]),
          rank: row[10],
          ingredients: row[3],
          image: row[8],
          oily: row[5] === '1',
          dry: row[6] === '1',
          sensitive: row[7] === '1',
          combination: row[5] === '1' && row[6] === '1' && row[7] === '1',
        },
      });
    })
    .on('end', function () {
      console.log('finished seeding products');
    })
    .on('error', function (error) {
      console.log(error.message);
    });
}

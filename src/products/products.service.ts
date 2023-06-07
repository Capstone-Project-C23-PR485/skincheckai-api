import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    productType: 'moisturizer' | 'sunscreen' | 'facewash' | 'serum' | 'all',
  ) {
    let data;
    if (productType !== 'all') {
      data = await this.prisma.skinCareProduct.findMany();
    } else {
      data = await this.prisma.skinCareProduct.findMany({
        where: {
          type: productType,
        },
      });
    }

    return {
      statusCode: 200,
      message: 'Success finding all products ',
      data: data,
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.skinCareProduct.findUnique({
      where: {
        id: id,
      },
    });

    return {
      statusCode: 200,
      message: 'Success finding one product',
      data: data,
    };
  }

  async getRecommendation(
    skinType: 'oily' | 'dry' | 'combination' | 'sensitive',
  ) {
    const productType = ['moisturizer', 'sunscreen', 'facewash', 'serum'];
    const data = {};
    for (let i = 0; i < productType.length; i++) {
      const product = await this.prisma.skinCareProduct.findMany({
        where: {
          [skinType]: true,
          type: productType[i],
        },
        take: 3,
        orderBy: {
          rank: 'asc',
        },
      });

      data[productType[i]] = product;
    }

    return {
      statusCode: 200,
      message: 'Success finding recommendation for skin type ' + skinType,
      data: data,
    };
  }
}

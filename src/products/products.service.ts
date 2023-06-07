import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.skinCareProduct.findMany();

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
    const data = await this.prisma.skinCareProduct.findMany({
      where: {
        [skinType]: true,
      },

      take: 5,
      orderBy: {
        rank: 'asc',
      },
    });

    return {
      statusCode: 200,
      message: 'Success finding recommendation for skin type ' + skinType,
      data: data,
    };
  }
}

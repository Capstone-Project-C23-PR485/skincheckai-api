import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.skinCareProduct.findMany();

    return {
      status: 200,
      message: 'Success',
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
      status: 200,
      message: 'Success',
      data: data,
    };
  }

  async getRecommendation(skinType: string) {
    const data = await this.prisma.skinCareProduct.findMany({
      where: {
        skinType: skinType,
      },
      // TODO: Add orderby and else

      take: 3,
    });

    return {
      status: 200,
      message: 'Success',
      data: data,
    };
  }
}

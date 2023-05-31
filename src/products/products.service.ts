import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.skinCareProduct.findMany();
  }

  findOne(id: number) {
    return this.prisma.skinCareProduct.findUnique({
      where: {
        id: id,
      },
    });
  }

  getRecommendation(skinType: string, skinCondition: string) {
    return this.prisma.skinCareProduct.findMany({
      where: {
        skinType: skinType,
        skinCondition: skinCondition,
      },
    });
  }
}

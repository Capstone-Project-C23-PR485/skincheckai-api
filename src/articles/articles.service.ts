import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = this.prisma.article.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
      },
    });

    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }

  async findOne(id: number) {
    const data = this.prisma.article.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
      },
    });

    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }
}

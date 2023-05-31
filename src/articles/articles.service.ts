import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.article.findMany();
  }

  async findOne(id: number) {
    return this.prisma.article.findUnique({
      where: {
        id: id,
      },
    });
  }
}

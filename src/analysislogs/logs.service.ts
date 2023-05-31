import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LogsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.analysisLog.findMany({
      // TODO: format the result
      include: {
        analysisResult: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.analysisLog.findUnique({
      where: {
        id: id,
      },
      include: {
        analysisResult: true,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LogsService {
  constructor(private prisma: PrismaService) {}

  async findAll(user_id: string) {
    return this.prisma.analysisLog.findMany({
      // TODO: format the result
      include: {
        analysisResult: true,
      },
      where: {
        user_id: user_id,
      },
    });
  }

  async findOne(id: number, user_id: string) {
    return this.prisma.analysisLog.findFirst({
      where: {
        id: id,
        user_id: user_id,
      },
      include: {
        analysisResult: true,
      },
    });
  }
}

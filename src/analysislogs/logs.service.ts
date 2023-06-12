import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class LogsService {
  constructor(private prisma: PrismaService) {}

  async findAll(user_id: string) {
    const data = await this.prisma.analysisLog.findMany({
      where: {
        user_id: user_id,
      },
      select: {
        id: true,
        skinScore: true,
        createdAt: true,
        picture: true,
      },
    });

    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }

  async findOne(id: number, user_id: string) {
    const data = await this.prisma.analysisLog.findFirst({
      where: {
        id: id,
        user_id: user_id,
      },
      select: {
        id: true,
        skinScore: true,
        createdAt: true,
        picture: true,
        analysisResult: {
          select: {
            picture: true,
            problemCount: true,
            category: true,
            modelResult: true,
          },
        },
      },
    });

    return {
      statusCode: 200,
      message:
        data.analysisResult.length < 3 ? 'Success' : 'Data is still processed',
      data: data,
    };
  }
}

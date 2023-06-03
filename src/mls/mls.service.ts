import { Body, Injectable } from '@nestjs/common';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { Express } from 'express';
import { StorageService } from 'src/storage/storage.service';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class MlsService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  async requestAnalyses(user_id: string, image: Express.Multer.File) {
    const fileName: string = `${user_id}-${Date.now()}`.toString();

    const analysis = await this.prisma.analysisLog.create({
      data: {
        user_id: user_id,
        picture: fileName,
      },
    });

    await this.storageService.save(
      'images/' + fileName,
      image.mimetype,
      image.buffer,
      [{ name: 'analysisId', value: analysis.id.toString() }],
    );

    return {
      statusCode: 200,
      message: 'Success',
      data: {
        logId: analysis.id,
      },
    };
  }

  async reportAnalyses(@Body() body: ReportAnalysisDto) {
    await this.prisma.analysisResult.create({
      data: {
        analysisLogId: body.id,
        picture: body.image,
        modelResult: body.data,
        category: body.model,
        problemCount: 0, // TODO: Implement problem count
      },
    });

    return {
      statusCode: 'success',
      message: 'OK',
      data: [],
    };
  }
}

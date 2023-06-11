import { Body, Injectable } from '@nestjs/common';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { Express } from 'express';
import { StorageService } from 'src/storage/storage.service';
import { PrismaService } from 'src/utils/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MlsService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  async requestAnalyses(user_id: string, image: Express.Multer.File) {
    const fileName = uuidv4();

    const analysis = await this.prisma.analysisLog.create({
      data: {
        user_id: user_id,
        picture: fileName,
      },
    });

    await this.storageService.save(
      'images_uploaded/' + fileName,
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

  async reportAnalyses(body: ReportAnalysisDto) {
    const originalImageName = body.id;

    // search for AnalysisLog that have that specific picture
    const analysis = await this.prisma.analysisLog.findUnique({
      where: {
        picture: originalImageName,
      },
    });

    const problemCount: number = body.data.confidence > 0.5 ? 1 : 0;

    await this.prisma.analysisResult.create({
      data: {
        analysisLogId: analysis.id,
        picture: body.image,
        modelResult: body.data,
        category: body.model,
        problemCount: problemCount,
      },
    });

    return {
      statusCode: 'success',
      message: 'OK',
      data: [],
    };
  }
}

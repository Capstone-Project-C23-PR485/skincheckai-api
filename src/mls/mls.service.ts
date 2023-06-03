import { Injectable } from '@nestjs/common';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { PrismaService } from 'src/prisma.service';
import { Express } from 'express';
import { StorageFile } from 'src/storage-options';
import { StorageService } from 'src/storage/storage.service';

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
      status: 200,
      message: 'Success',
      data: {
        analysisId: analysis.id,
      },
    };
  }

  async reportAnalyses(body: ReportAnalysisDto) {
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
      status: 'success',
      message: 'OK',
      data: [],
    };
  }
}

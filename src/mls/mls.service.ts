import { Injectable } from '@nestjs/common';
import { RequestAnalysisDto } from './dto/request-analysis.dto';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MlsService {
  constructor(private prisma: PrismaService) {}

  async requestAnalyses(user_id: string, body: RequestAnalysisDto) {
    // create a fileName using user_id and current timestamp
    const fileName = `${user_id}-${Date.now()}`;

    const analysis = await this.prisma.analysisLog.create({
      data: {
        user_id: user_id,
      },
    });

    // todo: upload image to gcp storage

    return analysis.id;
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

    // return status success and OK as the message
    return {
      status: 'success',
      message: 'OK',
    };
  }
}

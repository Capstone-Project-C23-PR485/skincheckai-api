import { Body, Controller, Post } from '@nestjs/common';
import { MlsService } from './mls.service';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { RequestAnalysisDto } from './dto/request-analysis.dto';
import { FirebaseUserDTO } from 'src/firebase-user.dto';
import { FirebaseAuthUser } from 'src/firebase-user.decorator';

@Controller('mls')
export class MlsController {
  constructor(private readonly mlsService: MlsService) {}

  @Post('request-analyses')
  requestAnalyses(
    @FirebaseAuthUser() user: FirebaseUserDTO,
    @Body() body: RequestAnalysisDto,
  ) {
    return this.mlsService.requestAnalyses(user.user_id, body);
  }

  @Post('report-analyses')
  reportAnalyses(@Body() body: ReportAnalysisDto) {
    return this.mlsService.reportAnalyses(body);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { MlsService } from './mls.service';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { RequestAnalysisDto } from './dto/request-analysis.dto';
import { User } from 'src/user/user.decorator';
import { FirebaseUserDTO } from 'src/users/dto/firebase-user.dto';

@Controller('mls')
export class MlsController {
  constructor(private readonly mlsService: MlsService) {}

  @Post('request-analyses')
  requestAnalyses(
    @User() user: FirebaseUserDTO,
    @Body() body: RequestAnalysisDto,
  ) {
    return this.mlsService.requestAnalyses(user.user_id, body);
  }

  @Post('report-analyses')
  reportAnalyses(@Body() body: ReportAnalysisDto) {
    return this.mlsService.reportAnalyses(body);
  }
}

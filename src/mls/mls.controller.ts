import {
  Body,
  Controller,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MlsService } from './mls.service';
import { ReportAnalysisDto } from './dto/report-analysis.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { FirebaseAuthUser } from 'src/utils/firebase-user.decorator';
import { FirebaseUserDTO } from 'src/utils/firebase-user.dto';

@Controller('machine-learning')
@UseGuards(FirebaseAuthGuard)
export class MlsController {
  constructor(private readonly mlsService: MlsService) {}

  @Post('request-analyses')
  @UseInterceptors(FileInterceptor('image'))
  requestAnalyses(
    @FirebaseAuthUser() user: FirebaseUserDTO,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'image/*' })
        .build({ fileIsRequired: true }),
    )
    image: Express.Multer.File,
  ) {
    // upload image to storage
    return this.mlsService.requestAnalyses(user.user_id, image);
  }

  @Post('report-analyses')
  reportAnalyses(@Body() body: ReportAnalysisDto) {
    return this.mlsService.reportAnalyses(body);
  }
}

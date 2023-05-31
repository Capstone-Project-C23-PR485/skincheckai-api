import { Module } from '@nestjs/common';
import { MlsService } from './mls.service';
import { MlsController } from './mls.controller';

@Module({
  controllers: [MlsController],
  providers: [MlsService],
})
export class MlsModule {}

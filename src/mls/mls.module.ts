import { Module } from '@nestjs/common';
import { MlsService } from './mls.service';
import { MlsController } from './mls.controller';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [StorageModule],
  controllers: [MlsController],
  providers: [MlsService],
})
export class MlsModule {}

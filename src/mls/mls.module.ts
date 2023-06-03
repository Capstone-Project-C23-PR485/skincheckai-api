import { Module } from '@nestjs/common';
import { MlsService } from './mls.service';
import { MlsController } from './mls.controller';
import { StorageModule } from 'src/storage/storage.module';
import { StorageService } from 'src/storage/storage.service';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  imports: [StorageModule],
  controllers: [MlsController],
  providers: [MlsService, PrismaService, StorageService],
})
export class MlsModule {}

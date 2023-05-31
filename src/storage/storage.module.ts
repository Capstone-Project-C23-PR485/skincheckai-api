import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';

@Module({})
export class StorageModule {
  providers: [StorageService];
  exports: [StorageService];
}

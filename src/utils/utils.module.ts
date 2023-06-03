import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FirebaseUserDTO } from './firebase-user.dto';

@Module({})
export class UtilsModule {
  exports: [PrismaService, FirebaseUserDTO];
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './utils/prisma.service';
import { ProductsModule } from './products/products.module';
import { MlsModule } from './mls/mls.module';
import { LogsModule } from './analysislogs/logs.module';
import { ArticlesModule } from './articles/articles.module';
import { StorageService } from './storage/storage.service';
import { StorageModule } from './storage/storage.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FirebaseAuthModule.register({
      audience: process.env.FIREBASE_AUTH_AUDIENCE,
      issuer: process.env.FIREBASE_AUTH_ISSUER,
    }),
    ProfileModule,
    ProductsModule,
    MlsModule,
    LogsModule,
    ArticlesModule,
    StorageModule,
    UtilsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, StorageService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';
import { MlsModule } from './mls/mls.module';
import { LogsModule } from './logs/logs.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FirebaseAuthModule.register({
      audience: 'testing-auth-with-node',
      issuer: 'https://securetoken.google.com/testing-auth-with-node',
    }),
    ProfileModule,
    ProductsModule,
    MlsModule,
    LogsModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

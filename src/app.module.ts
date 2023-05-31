import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FirebaseAuthModule.register({
      audience: 'testing-auth-with-node',
      issuer: 'https://securetoken.google.com/testing-auth-with-node',
    }),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

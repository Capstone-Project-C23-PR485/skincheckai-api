import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    FirebaseAuthModule.register({
      audience: 'testing-auth-with-node',
      issuer: 'https://securetoken.google.com/testing-auth-with-node',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

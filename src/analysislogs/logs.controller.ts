import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { LogsService } from './logs.service';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { FirebaseUserDTO } from 'src/firebase-user.dto';
import { FirebaseAuthUser } from 'src/firebase-user.decorator';

@Controller('logs')
@UseGuards(FirebaseAuthGuard)
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  findAll(@FirebaseAuthUser() firebaseUser: FirebaseUserDTO) {
    return this.logsService.findAll(firebaseUser.user_id);
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe()) id: number,
    @FirebaseAuthUser() firebaseUser: FirebaseUserDTO,
  ) {
    return this.logsService.findOne(id, firebaseUser.user_id);
  }
}

import { Controller, Get, Body, Patch, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { User } from 'src/user/user.decorator';
import { FirebaseUserDTO } from './dto/firebase-user.dto';

@Controller('users')
@UseGuards(FirebaseAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async get(@User() firebaseUser: FirebaseUserDTO) {
    return this.usersService.get(firebaseUser);
  }

  @Patch()
  async update(
    @User() firebaseUser: FirebaseUserDTO,
    @Body() updateData: UpdateUserDto,
  ) {
    return this.usersService.update(firebaseUser, updateData);
  }
}

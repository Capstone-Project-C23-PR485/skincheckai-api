import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { FirebaseUserDTO } from '../firebase-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FirebaseAuthUser } from 'src/firebase-user.decorator';

@ApiBearerAuth()
@ApiTags('User')
@Controller('profile')
@UseGuards(FirebaseAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Getting user profile' })
  async get(@FirebaseAuthUser() firebaseUser: FirebaseUserDTO) {
    return this.usersService.get(firebaseUser);
  }

  @Patch()
  @ApiOperation({ summary: 'Updating user profile' })
  async update(
    @FirebaseAuthUser() firebaseUser: FirebaseUserDTO,
    @Body() updateData: UpdateUserDto,
  ) {
    return this.usersService.update(firebaseUser, updateData);
  }
}

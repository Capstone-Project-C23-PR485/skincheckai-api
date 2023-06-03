import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';
import { FirebaseUserDTO } from '../utils/firebase-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FirebaseAuthUser } from 'src/utils/firebase-user.decorator';

@ApiBearerAuth()
@ApiTags('User')
@Controller('profile')
@UseGuards(FirebaseAuthGuard)
export class ProfileController {
  constructor(private readonly usersService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Getting user profile' })
  async get(@FirebaseAuthUser() firebaseUser: FirebaseUserDTO) {
    return this.usersService.get(firebaseUser);
  }

  @Patch()
  @ApiOperation({ summary: 'Updating user profile' })
  async update(
    @FirebaseAuthUser() firebaseUser: FirebaseUserDTO,
    @Body() updateData: UpdateProfileDto,
  ) {
    updateData.birthDate = new Date(updateData.birthDate);
    return this.usersService.update(firebaseUser, updateData);
  }
}

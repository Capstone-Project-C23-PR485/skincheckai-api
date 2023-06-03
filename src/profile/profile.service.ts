import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/utils/prisma.service';
import { FirebaseUserDTO } from 'src/utils/firebase-user.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async get(firebaseUser: FirebaseUserDTO) {
    let user = await this.prisma.user.findFirst({
      where: {
        user_id: firebaseUser.user_id,
      },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          user_id: firebaseUser.user_id,
          name: firebaseUser.name,
          email: firebaseUser.email,
          picture: firebaseUser.picture,
        },
      });
    }

    return {
      status: 200,
      message: 'Success',
      data: user,
    };
  }

  async update(firebaseUser: FirebaseUserDTO, updateUserDTO: UpdateProfileDto) {
    const data = await this.prisma.user.upsert({
      where: {
        user_id: firebaseUser.user_id,
      },
      update: {
        name: updateUserDTO.name,
        birthDate: updateUserDTO.birthDate,
        skinType: updateUserDTO.skinType,
      },
      create: {
        user_id: firebaseUser.user_id,
        name: firebaseUser.name,
        email: firebaseUser.email,
        picture: firebaseUser.picture,
      },
    });

    return {
      status: 200,
      message: 'Data successfully updated',
      data: data,
    };
  }
}

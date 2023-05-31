import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma.service';
import { FirebaseUserDTO } from '../firebase-user.dto';

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

    return user;
  }

  async update(firebaseUser: FirebaseUserDTO, updateUserDTO: UpdateProfileDto) {
    return this.prisma.user.upsert({
      where: {
        user_id: firebaseUser.user_id,
      },
      update: {
        name: updateUserDTO.name,
        birthDate: updateUserDTO.birthDate,
        skinCondition: updateUserDTO.skinCondition,
        skinType: updateUserDTO.skinType,
      },
      create: {
        user_id: firebaseUser.user_id,
        name: firebaseUser.name,
        email: firebaseUser.email,
        picture: firebaseUser.picture,
      },
    });
  }
}

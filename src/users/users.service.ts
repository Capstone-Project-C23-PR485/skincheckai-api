import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { FirebaseUserDTO } from './dto/firebase-user.dto';

@Injectable()
export class UsersService {
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

    console.log(user);

    return user;
  }

  async update(firebaseUser: FirebaseUserDTO, updateUserDTO: UpdateUserDto) {
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

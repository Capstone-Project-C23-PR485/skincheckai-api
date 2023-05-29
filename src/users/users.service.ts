import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findOne(uid: string) {
    return this.prisma.user.findFirst({ where: { uid: uid } });
  }

  update(uid: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.upsert({
      where: {
        uid: uid,
      },
      update: {
        ...updateUserDto,
      },
      create: {
        uid: uid,
        ...updateUserDto,
      },
    });
  }

  remove(uid: string) {
    return this.prisma.user.update({
      where: {
        uid: uid,
      },
      data: {
        deletedAt: new Date(), // g yakin, perlu dicek
      },
    });
  }
}

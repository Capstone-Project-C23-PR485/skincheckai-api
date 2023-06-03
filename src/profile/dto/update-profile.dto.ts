import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  name: string;
  birthDate: Date;
  skinType: string;
}

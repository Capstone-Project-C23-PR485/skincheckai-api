import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  skinType: string;
  @ApiProperty()
  skinCondition: string;
}

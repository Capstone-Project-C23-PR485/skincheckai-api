import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  skinType: string;
  @ApiProperty()
  skinCondition: string;
}

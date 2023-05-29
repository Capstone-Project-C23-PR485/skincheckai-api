import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  uid: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;

  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  skinType: string;

  @IsNotEmpty()
  skinCondition: string;
}

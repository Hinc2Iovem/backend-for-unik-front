import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;

  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'Not less than 4 and no more than 16 characters' })
  readonly password: string;
}

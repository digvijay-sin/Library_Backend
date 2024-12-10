import { IsString, IsEmail, Matches, MinLength, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty({ message: 'Username is required.' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long.' })
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;

  @IsEmail({}, { message: 'Invalid email format.' })
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @Matches(/^\d{10}$/, { message: 'Phone number must be 10 digits.' })
  @IsNotEmpty({ message: 'Phone number is required.' })
  phone: string;
}

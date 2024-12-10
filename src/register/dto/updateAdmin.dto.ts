import { IsString, IsEmail, Matches, MinLength, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateAdminDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Username cannot be empty if provided.' })
  username?: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long.' })
  @IsOptional()
  @IsNotEmpty({ message: 'Password cannot be empty if provided.' })
  password?: string;
  confirmPassword?:string;

  @IsEmail({}, { message: 'Invalid email format.' })
  @IsOptional()
  @IsNotEmpty({ message: 'Email cannot be empty if provided.' })
  email?: string;

  @Matches(/^\d{10}$/, { message: 'Phone number must be 10 digits.' })
  @IsOptional()
  @IsNotEmpty({ message: 'Phone number cannot be empty if provided.' })
  phone?: string;
}

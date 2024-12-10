import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsNumber()
  studentId?: number;

  @IsOptional()
  @IsString()
  studentName?: string;

  @IsOptional()
  @IsString()
  course?: string;

  @IsOptional()
  @IsString()
  branch?: string;

  @IsOptional()
  @IsNumber()
  year?: number;  // Numeric year

  @IsOptional()
  @IsNumber()
  semester?: number;  // Numeric semester
}

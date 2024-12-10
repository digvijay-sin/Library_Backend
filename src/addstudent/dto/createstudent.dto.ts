import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsNumber()
  studentId: number;

  @IsNotEmpty()
  @IsString()
  studentName: string;

  @IsNotEmpty()
  @IsString()
  course: string;

  @IsNotEmpty()
  @IsString()
  branch: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;  

  @IsNotEmpty()
  @IsNumber()
  semester: number;  
}

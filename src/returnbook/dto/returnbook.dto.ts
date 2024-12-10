import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ReturnBookDto {
  @IsNumber()
  @IsNotEmpty()
  studentId: number;

  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @IsDateString()
  @IsOptional()
  returnDate?: Date;

  @IsString()
  @IsOptional()
  bookName?: string;

  @IsString()
  @IsOptional()
  course?: string;

  @IsDateString()
  @IsOptional()
  issueDate?: Date;

  @IsString()
  @IsOptional()
  studentName?: string;

  @IsString()
  @IsOptional()
  branch?: string;
}

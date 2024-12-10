import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateIssueBookDto {
  @IsNumber()
  @IsNotEmpty()
  bookId: number;

  @IsNumber()
  @IsNotEmpty()
  studentId: number;


  @IsNotEmpty()
  issueDate: Date;
}

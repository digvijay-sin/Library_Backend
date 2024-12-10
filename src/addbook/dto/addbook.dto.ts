import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsNumber({}, { message: 'Book ID must be a number.' })
  @IsNotEmpty({ message: 'Book ID is required.' })
  bookId: number;

  @IsString({ message: 'Book Name must be a string.' })
  @IsNotEmpty({ message: 'Book Name is required.' })
  name: string;

  @IsString({ message: 'ISBN must be a string.' })
  @IsNotEmpty({ message: 'ISBN is required.' })
  isbn: string;

  @IsString({ message: 'Publisher must be a string.' })
  @IsNotEmpty({ message: 'Publisher is required.' })
  publisher: string;

  @IsString({ message: 'Edition must be a string.' })
  @IsNotEmpty({ message: 'Edition is required.' })
  edition: string;

  @IsNumber({}, { message: 'Price must be a number.' })
  @IsNotEmpty({ message: 'Price is required.' })
  @Min(0, { message: 'Price must be a positive number.' })
  price: number;

  @IsNumber({}, { message: 'Copies must be a number.' })
  @IsNotEmpty({ message: 'Available Copies are required.' })
  @Min(1, { message: 'Copies must be at least 1.' })
  copies: number;
}

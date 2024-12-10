import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/addbook/addbook.schema';
import { Student } from 'src/addstudent/addstudent.schema';
import { IssueBook } from 'src/issuebook/issuebook.schema';
import { ReturnBook } from './returnbook.schema';
import { ReturnBookDto } from './dto/returnbook.dto';
import { CreateBookDto } from 'src/addbook/dto/addbook.dto';

@Injectable()
export class ReturnbookService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>,@InjectModel(Student.name) private studentModel: Model<Student>,@InjectModel(IssueBook.name) private issueBookModel: Model<IssueBook>,
    @InjectModel(ReturnBook.name) private returnBookModel: Model<ReturnBook>) {}

    async getStudentBookInformation(createReturnDto: { studentId: number; bookId: number }): Promise<any> {
        const { studentId, bookId } = createReturnDto;
        const issuebook = await this.issueBookModel.findOne({ studentId, bookId }).exec();
        if (!issuebook) {
          throw new NotFoundException(`No book issue record found for Student ID ${studentId} and Book ID ${bookId}`);
        }

        const student = await this.studentModel.findOne({ studentId }).exec();
        if (!student) {
          throw new NotFoundException(`Student with ID ${studentId} not found`);
        }
    
        const book = await this.bookModel.findOne({ bookId }).exec();
        if (!book) {
          throw new NotFoundException(`Book with ID ${bookId} not found`);
        }
    
   
        return {
          issuebook,
          student,
          book,
        };
      }

      async returnBook(returnBookDto:ReturnBookDto):Promise<ReturnBook>{
        const returnBook=new this.returnBookModel(returnBookDto);
        return returnBook.save();
      }
}

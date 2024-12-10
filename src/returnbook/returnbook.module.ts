import { Module } from '@nestjs/common';
import { ReturnbookService } from './returnbook.service';
import { ReturnbookController } from './returnbook.controller';
import { Book, BookSchema } from 'src/addbook/addbook.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/addstudent/addstudent.schema';
import { IssueBook, IssueBookSchema } from 'src/issuebook/issuebook.schema';
import { ReturnBook, ReturnBookSchema } from './returnbook.schema';
import { AddbookService } from 'src/addbook/addbook.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  MongooseModule.forFeature([{ name: IssueBook.name, schema: IssueBookSchema }]),MongooseModule.forFeature([{ name: ReturnBook.name, schema: ReturnBookSchema }])],
  providers: [ReturnbookService,AddbookService],
  controllers: [ReturnbookController]
})
export class ReturnbookModule {}

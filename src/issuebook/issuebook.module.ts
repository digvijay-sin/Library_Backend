import { Module } from '@nestjs/common';
import { IssuebookService } from './issuebook.service';
import { IssuebookController } from './issuebook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IssueBook, IssueBookSchema } from './issuebook.schema';
import { Student, StudentSchema } from 'src/addstudent/addstudent.schema';
import { Book, BookSchema } from 'src/addbook/addbook.schema';
import { AddbookService } from 'src/addbook/addbook.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: IssueBook.name, schema: IssueBookSchema }]), MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]) ],
  providers: [IssuebookService,AddbookService],
  controllers: [IssuebookController]
})
export class IssuebookModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { IssueBook } from './issuebook.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIssueBookDto } from './dto/issuebook.dto';
import { Student } from 'src/addstudent/addstudent.schema';
import { Book } from 'src/addbook/addbook.schema';

@Injectable()
export class IssuebookService {

    constructor(@InjectModel(IssueBook.name) private issueBookModel: Model<IssueBook>,@InjectModel(Student.name) private studentModel: Model<Student>,@InjectModel(Book.name) private bookModel: Model<Book>) {}

    async create(createBookIssueDto:CreateIssueBookDto):Promise<IssueBook>{
        const student=await this.studentModel.findOne({studentId:createBookIssueDto.studentId});
        const book=await this.bookModel.findOne({bookId:createBookIssueDto.bookId});
        if(!student || !book){
            throw new NotFoundException(`Student with ID ${createBookIssueDto.studentId} not found`);
        }
        const created=new this.issueBookModel(createBookIssueDto);
        return created.save();
    }
}

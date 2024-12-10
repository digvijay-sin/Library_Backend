import { IssueBook } from './issuebook.schema';
import { Model } from 'mongoose';
import { CreateIssueBookDto } from './dto/issuebook.dto';
import { Student } from 'src/addstudent/addstudent.schema';
import { Book } from 'src/addbook/addbook.schema';
export declare class IssuebookService {
    private issueBookModel;
    private studentModel;
    private bookModel;
    constructor(issueBookModel: Model<IssueBook>, studentModel: Model<Student>, bookModel: Model<Book>);
    create(createBookIssueDto: CreateIssueBookDto): Promise<IssueBook>;
}

import { Model } from 'mongoose';
import { Book } from 'src/addbook/addbook.schema';
import { Student } from 'src/addstudent/addstudent.schema';
import { IssueBook } from 'src/issuebook/issuebook.schema';
import { ReturnBook } from './returnbook.schema';
import { ReturnBookDto } from './dto/returnbook.dto';
export declare class ReturnbookService {
    private bookModel;
    private studentModel;
    private issueBookModel;
    private returnBookModel;
    constructor(bookModel: Model<Book>, studentModel: Model<Student>, issueBookModel: Model<IssueBook>, returnBookModel: Model<ReturnBook>);
    getStudentBookInformation(createReturnDto: {
        studentId: number;
        bookId: number;
    }): Promise<any>;
    returnBook(returnBookDto: ReturnBookDto): Promise<ReturnBook>;
}

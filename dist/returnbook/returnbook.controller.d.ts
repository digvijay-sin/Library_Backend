import { ReturnbookService } from './returnbook.service';
import { ReturnBookDto } from './dto/returnbook.dto';
import { ReturnBook } from './returnbook.schema';
import { AddbookService } from 'src/addbook/addbook.service';
export declare class ReturnbookController {
    private readonly returnBookService;
    private readonly addBookService;
    constructor(returnBookService: ReturnbookService, addBookService: AddbookService);
    getStudentBook(query: {
        studentId: number;
        bookId: number;
    }): Promise<any>;
    returnBook(returnBookDto: ReturnBookDto): Promise<ReturnBook>;
}

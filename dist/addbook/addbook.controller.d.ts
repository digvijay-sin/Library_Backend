import { AddbookService } from './addbook.service';
import { CreateBookDto } from './dto/addbook.dto';
import { Book } from './addbook.schema';
export declare class AddbookController {
    private readonly addBookService;
    constructor(addBookService: AddbookService);
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    getAllBook(): Promise<Book[]>;
    searchBooks(query: string): Promise<Book[]>;
    deleteBook(id: number): Promise<Book>;
}

import { Book } from './addbook.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/addbook.dto';
export declare class AddbookService {
    private bookModel;
    constructor(bookModel: Model<Book>);
    createBook(createBookDto: CreateBookDto): Promise<Book>;
    getAllBook(): Promise<Book[]>;
    searchBooks(query: string): Promise<Book[]>;
    decrementCopies(id: number): Promise<Book | null>;
    incrementCopies(id: number): Promise<Book | null>;
    deleteBook(id: number): Promise<Book>;
}

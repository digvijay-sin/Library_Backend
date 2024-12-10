import { HydratedDocument } from 'mongoose';
export type bookDocument = HydratedDocument<Book>;
export declare class Book {
    bookId: number;
    name: string;
    isbn: string;
    publisher: string;
    edition: string;
    price: number;
    copies: number;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, import("mongoose").Document<unknown, any, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Book>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
}>;

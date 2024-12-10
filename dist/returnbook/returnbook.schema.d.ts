import { HydratedDocument } from 'mongoose';
export type returnDocument = HydratedDocument<ReturnBook>;
export declare class ReturnBook {
    studentId: number;
    bookId: number;
    returnDate: Date;
    bookName?: string;
    course?: string;
    issueDate?: Date;
    studentName?: string;
    branch?: string;
}
export declare const ReturnBookSchema: import("mongoose").Schema<ReturnBook, import("mongoose").Model<ReturnBook, any, any, any, import("mongoose").Document<unknown, any, ReturnBook> & ReturnBook & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReturnBook, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ReturnBook>> & import("mongoose").FlatRecord<ReturnBook> & {
    _id: import("mongoose").Types.ObjectId;
}>;

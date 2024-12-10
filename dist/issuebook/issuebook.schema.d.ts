import { HydratedDocument } from 'mongoose';
export type issueDocument = HydratedDocument<IssueBook>;
export declare class IssueBook {
    bookId: number;
    studentId: number;
    issueDate: Date;
}
export declare const IssueBookSchema: import("mongoose").Schema<IssueBook, import("mongoose").Model<IssueBook, any, any, any, import("mongoose").Document<unknown, any, IssueBook> & IssueBook & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IssueBook, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IssueBook>> & import("mongoose").FlatRecord<IssueBook> & {
    _id: import("mongoose").Types.ObjectId;
}>;

import { HydratedDocument } from 'mongoose';
export type studentDocument = HydratedDocument<Student>;
export declare class Student {
    studentId: number;
    studentName: string;
    course: string;
    branch: string;
    year: number;
    semester: number;
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, import("mongoose").Document<unknown, any, Student> & Student & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & {
    _id: import("mongoose").Types.ObjectId;
}>;

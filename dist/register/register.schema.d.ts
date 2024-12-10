import { HydratedDocument } from 'mongoose';
export type adminDocument = HydratedDocument<Admin>;
export declare class Admin {
    username: string;
    password: string;
    email: string;
    phone: string;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, import("mongoose").Document<unknown, any, Admin> & Admin & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Admin>> & import("mongoose").FlatRecord<Admin> & {
    _id: import("mongoose").Types.ObjectId;
}>;

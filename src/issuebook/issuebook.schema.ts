import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type issueDocument = HydratedDocument<IssueBook>;

@Schema()
export class IssueBook {
    @Prop({ required: true})
    bookId: number;

  @Prop({ required: true})
  studentId: number;

   @Prop({required:true})
   issueDate:Date;
}

export const IssueBookSchema = SchemaFactory.createForClass(IssueBook);

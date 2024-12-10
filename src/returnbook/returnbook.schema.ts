import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  HydratedDocument } from 'mongoose';

export type returnDocument = HydratedDocument<ReturnBook>;

@Schema()
export class ReturnBook {
  @Prop({ required: true })
  studentId: number;

  @Prop({ required: true })
  bookId: number;

  @Prop({ type: Date, required: true })
  returnDate: Date;

  @Prop({ required: false })
  bookName?: string;

  @Prop({ required: false })
  course?: string;

  @Prop({ type: Date, required: false })
  issueDate?: Date;

  @Prop({ required: false })
  studentName?: string;

  @Prop({ required: false })
  branch?: string;
}

export const ReturnBookSchema = SchemaFactory.createForClass(ReturnBook);

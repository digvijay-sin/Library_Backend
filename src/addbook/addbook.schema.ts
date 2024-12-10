import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type bookDocument = HydratedDocument<Book>;

@Schema()
export class Book {

  @Prop({required:true})
  bookId: number;

  @Prop({required:true})
  name:string;

  @Prop({required:true,unique:true})
  isbn:string;

  @Prop({required:true})
  publisher:string;

  @Prop({required:true})
  edition:string;

  @Prop({required:true, min: 0})
  price:number;

  @Prop({required:true,min:1})
  copies:number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
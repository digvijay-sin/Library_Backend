import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type studentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true, unique: true })
  studentId: number;

  @Prop({ required: true })
  studentName: string;

  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  semester: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

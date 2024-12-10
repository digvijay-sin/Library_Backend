import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type adminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {

  @Prop({required:true})
  username: string;

  @Prop({required:true})
  password:string;

  @Prop({required:true,unique:true})
  email:string;

  @Prop({required:true})
  phone:string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
import { Module } from '@nestjs/common';
import { AddstudentController } from './addstudent.controller';
import { AddstudentService } from './addstudent.service';
import { Student, StudentSchema } from './addstudent.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
  controllers: [AddstudentController],
  providers: [AddstudentService],
  
})
export class AddstudentModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/createstudent.dto';
import { Student } from './addstudent.schema';
import { UpdateStudentDto } from './dto/updatestudent.dto';

@Injectable()
export class AddstudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

    async createStudent(createStudentDto:CreateStudentDto):Promise<Student>{
        const createdStudent=new this.studentModel(createStudentDto);
        return createdStudent.save();
    }
    async getStudent(id: number): Promise<Student> {
        const student = await this.studentModel.findOne({studentId:id});
    
        if (!student) {
          throw new NotFoundException(`Student with ID ${id} not found`);
        }
    
        return student;
      }

     async updateStudent( id: number,updateStudentDto: UpdateStudentDto): Promise<Student> {

    const updatedStudent = await this.studentModel.findOneAndUpdate(
      { studentId: id },
      updateStudentDto,
      { new: true } 
    );

  
    return updatedStudent;
  }
}

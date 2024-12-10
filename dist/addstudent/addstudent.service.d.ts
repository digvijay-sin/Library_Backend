import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/createstudent.dto';
import { Student } from './addstudent.schema';
import { UpdateStudentDto } from './dto/updatestudent.dto';
export declare class AddstudentService {
    private studentModel;
    constructor(studentModel: Model<Student>);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    getStudent(id: number): Promise<Student>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>;
}

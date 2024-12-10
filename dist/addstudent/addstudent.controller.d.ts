import { AddstudentService } from './addstudent.service';
import { CreateStudentDto } from './dto/createstudent.dto';
import { Student } from './addstudent.schema';
import { UpdateStudentDto } from './dto/updatestudent.dto';
export declare class AddstudentController {
    private readonly addStudentService;
    constructor(addStudentService: AddstudentService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    getStudentById(id: number): Promise<Student>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>;
}

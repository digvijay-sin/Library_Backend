import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AddstudentService } from './addstudent.service';
import { CreateStudentDto } from './dto/createstudent.dto';
import { Student } from './addstudent.schema';
import { UpdateStudentDto } from './dto/updatestudent.dto';

@Controller('student')
export class AddstudentController {
    constructor(private readonly addStudentService:AddstudentService){}

    @Post('/addStudent')
    async create(@Body() createStudentDto:CreateStudentDto):Promise<Student>{
        return this.addStudentService.createStudent(createStudentDto);
    }

   @Get('/getStudent/:id')
   async getStudentById(@Param('id') id: number):Promise<Student>{
    return this.addStudentService.getStudent(id);
   }

   @Put('/updateStudent/:id')
   async updateStudent(@Param ('id') id:number,@Body() updateStudentDto:UpdateStudentDto):Promise<Student>{
    return this.addStudentService.updateStudent(id,updateStudentDto);
   }
}

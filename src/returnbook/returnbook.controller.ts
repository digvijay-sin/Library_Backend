import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReturnbookService } from './returnbook.service';
import { ReturnBookDto } from './dto/returnbook.dto';
import { ReturnBook } from './returnbook.schema';
import { AddbookService } from 'src/addbook/addbook.service';

@Controller('return')
export class ReturnbookController {
    constructor(private readonly returnBookService:ReturnbookService,private readonly addBookService:AddbookService){}
     
    @Get('getdata')
    async getStudentBook(@Query() query: { studentId: number; bookId: number }){
        return this.returnBookService.getStudentBookInformation(query);
    }

    @Post('/returnBook')
    async returnBook(@Body() returnBookDto:ReturnBookDto):Promise<ReturnBook>{
        this.addBookService.incrementCopies(returnBookDto.bookId);
       return this.returnBookService.returnBook(returnBookDto);
    }
}

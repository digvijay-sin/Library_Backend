import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AddbookService } from './addbook.service';
import { CreateBookDto } from './dto/addbook.dto';
import { create } from 'domain';
import { Book } from './addbook.schema';

@Controller('book')
export class AddbookController {

    constructor(private readonly addBookService:AddbookService){}

    @Post('/addbook')
    async createBook(@Body() createBookDto:CreateBookDto):Promise<Book>{
        return this.addBookService.createBook(createBookDto);
    }

    @Get('/getAllBook')
    async getAllBook():Promise<Book[]>{
        return this.addBookService.getAllBook();
    }

    @Get('search')
    async searchBooks(@Query('q') query: string): Promise<Book[]> {
      return this.addBookService.searchBooks(query);
    }

    @Delete('deleteBook/:id')
    async deleteBook(@Param('id') id:number):Promise<Book>{
        return this.addBookService.deleteBook(id);
    }
    
}

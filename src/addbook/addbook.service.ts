import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './addbook.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/addbook.dto';

@Injectable()
export class AddbookService {
    
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}


    async createBook(createBookDto:CreateBookDto):Promise<Book>{
        const createdBook=new this.bookModel(createBookDto);
        return createdBook.save();
    }
    async getAllBook():Promise<Book[]>{
        return this.bookModel.find().exec();
    }
    async searchBooks(query: string): Promise<Book[]> {
        if (!query) {
          return this.bookModel.find().exec(); 
        }
        
        return this.bookModel.find({
          $or: [
            { name: { $regex: query, $options: 'i' } }, 
            { isbn: { $regex: query, $options: 'i' } },
            { publisher: { $regex: query, $options: 'i' } },
          ],
        }).exec();
      }

       async decrementCopies(id: number): Promise<Book | null> {
        const book = await this.bookModel.findOne({ bookId:id});
        if (!book) {
          throw new Error(`Book with ID ${id} not found`);
        }
        if (book.copies <= 0) {
          throw new Error(`No copies available to decrement for book with ID ${id}`);
        }
        book.copies -= 1;
        return book.save();
      }
      async incrementCopies(id: number): Promise<Book | null> {
        const book = await this.bookModel.findOne({ bookId: id });
        if (!book) {
          throw new Error(`Book with ID ${id} not found`);
        }
        book.copies += 1;
        return book.save();
      }

      async deleteBook(id:number):Promise<Book>{
        const book = await this.bookModel.findOneAndDelete({ bookId: id });

        if(!book){
          throw new NotFoundException(`Book with ID ${id} not found`);
        }

        return book;
      }
}

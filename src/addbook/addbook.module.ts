import { Module } from '@nestjs/common';
import { AddbookController } from './addbook.controller';
import { AddbookService } from './addbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './addbook.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [AddbookController],
  providers: [AddbookService]
})
export class AddbookModule {}

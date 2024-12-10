import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AddbookModule } from './addbook/addbook.module';
import { AddstudentModule } from './addstudent/addstudent.module';
import { IssuebookModule } from './issuebook/issuebook.module';
import { ReturnbookModule } from './returnbook/returnbook.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/libraryproject'),
    RegisterModule,
    AddbookModule,
    AddstudentModule,
    IssuebookModule,
    ReturnbookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './register.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}

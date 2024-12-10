import { BadRequestException, Body, Controller, Get, Param, Post, Put, Query, Req, UnauthorizedException } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from './register.schema';
import { UpdateAdminDto } from './dto/updateAdmin.dto';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService:RegisterService){}

    @Post('createAdmin')
    async create(@Body() createAdminDto:CreateAdminDto){
        return this.registerService.create(createAdminDto);
    }
    @Post('/login')
     async loginUser(@Body() loginDto:{email:string,password:string}):Promise<{ token: string }>{
        return  this.registerService.loginUser(loginDto);
     }

     @Get('/getotp')
     async getOtp(@Query('email') email: string) {
        if (!email) {
          throw new BadRequestException('Email parameter is required');
        }
        return this.registerService.sentotp(email);
      }

      @Get('/verifyotp')
     async verifyOtp(@Query('otp') otp: string) {
        if (!otp) {
          throw new BadRequestException('otp parameter is required');
        }
        return this.registerService.verifyotp(otp);
      }

      @Put('/updatepassword')
      async updatepassword(@Body() updateAdminDto:UpdateAdminDto):Promise<Admin>{
        const { email, password ,confirmPassword } = updateAdminDto;
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }
    if(password!=confirmPassword){
      throw new BadRequestException('Email and password are required');
    }
    return this.registerService.updatePassword(updateAdminDto);
      }


      @Get('/verifytoken')
      async verifyToken(@Req() request: Request): Promise<any> {
         
          const token = request.headers['authorization']?.split(' ')[1] || '';
         
          if (!token) {
              throw new UnauthorizedException('Token is missing');
          }
 
          const decoded = await this.registerService.verifyToken(token);
          return decoded;
      }
}

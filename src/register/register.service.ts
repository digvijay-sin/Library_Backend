import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './register.schema';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/createAdmin.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
@Injectable()
export class RegisterService {
    private readonly saltRounds = 10;
    private readonly JWT_SECRET = 'secretkey'; 
    private readonly JWT_EXPIRES_IN = '30min'; 

     verifyOtp:string='';
    constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}



     async create(createAdminDto:CreateAdminDto):Promise<Admin>{
        const hashedPassword = await bcrypt.hash(createAdminDto.password, this.saltRounds);
        const createdAdmin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword,
          });
          return createdAdmin.save();
     }

     private generateToken(userId: string): string {
        return jwt.sign({ id: userId }, this.JWT_SECRET, { expiresIn: this.JWT_EXPIRES_IN });
      }

async loginUser(loginDto:{email:string,password:string}):Promise<{ token: string }>{
        const user = await this.adminModel.findOne({ email : loginDto.email });
        if(!user){
            throw new NotFoundException('User with ID not found');
        }
        const isMatch = await bcrypt.compare(loginDto.password , user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
          }
          const token = this.generateToken(user.id);
          return { token };
     }

     async sentotp(email:string){
      const user = await this.adminModel.findOne({ email : email });
        if(!user){
            throw new NotFoundException('User with email not found');
        }
        const otp=Math.floor(100000 + Math.random() * 900000).toString();
        this.verifyOtp=otp;
        return otp;
     }
    
     async verifyotp(otp:string){
       return this.verifyOtp==otp;
     }
     
    async updatePassword(updateAdminDto:UpdateAdminDto):Promise<Admin>{

      const { email,password } = updateAdminDto;
      
    if (password) {
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);
      updateAdminDto.password = hashedPassword;
    }
      const updatedAdmin = await this.adminModel.findOneAndUpdate(
        { email: email },
        updateAdminDto,
        { new: true } 
      );
      if (!updatedAdmin) {
        throw new NotFoundException('Admin not found');
      }
    
      return updatedAdmin;
    }

    async verifyToken(token: string): Promise<any> {
      try {
          // Verify the token and decode its payload
          const decoded = jwt.verify(token, this.JWT_SECRET);
          return { valid: true, decoded };
      } catch (error) {
          throw new UnauthorizedException('Invalid or expired token');
      }
  }
    
}

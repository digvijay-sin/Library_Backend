import { Admin } from './register.schema';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
export declare class RegisterService {
    private adminModel;
    private readonly saltRounds;
    private readonly JWT_SECRET;
    private readonly JWT_EXPIRES_IN;
    verifyOtp: string;
    constructor(adminModel: Model<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    private generateToken;
    loginUser(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    sentotp(email: string): Promise<string>;
    verifyotp(otp: string): Promise<boolean>;
    updatePassword(updateAdminDto: UpdateAdminDto): Promise<Admin>;
    verifyToken(token: string): Promise<any>;
}

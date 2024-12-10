import { RegisterService } from './register.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from './register.schema';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    loginUser(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    getOtp(email: string): Promise<string>;
    verifyOtp(otp: string): Promise<boolean>;
    updatepassword(updateAdminDto: UpdateAdminDto): Promise<Admin>;
    verifyToken(request: Request): Promise<any>;
}

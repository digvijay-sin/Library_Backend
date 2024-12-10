"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const register_schema_1 = require("./register.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let RegisterService = class RegisterService {
    constructor(adminModel) {
        this.adminModel = adminModel;
        this.saltRounds = 10;
        this.JWT_SECRET = 'secretkey';
        this.JWT_EXPIRES_IN = '30min';
        this.verifyOtp = '';
    }
    async create(createAdminDto) {
        const hashedPassword = await bcrypt.hash(createAdminDto.password, this.saltRounds);
        const createdAdmin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword,
        });
        return createdAdmin.save();
    }
    generateToken(userId) {
        return jwt.sign({ id: userId }, this.JWT_SECRET, { expiresIn: this.JWT_EXPIRES_IN });
    }
    async loginUser(loginDto) {
        const user = await this.adminModel.findOne({ email: loginDto.email });
        if (!user) {
            throw new common_1.NotFoundException('User with ID not found');
        }
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const token = this.generateToken(user.id);
        return { token };
    }
    async sentotp(email) {
        const user = await this.adminModel.findOne({ email: email });
        if (!user) {
            throw new common_1.NotFoundException('User with email not found');
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        this.verifyOtp = otp;
        return otp;
    }
    async verifyotp(otp) {
        return this.verifyOtp == otp;
    }
    async updatePassword(updateAdminDto) {
        const { email, password } = updateAdminDto;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, this.saltRounds);
            updateAdminDto.password = hashedPassword;
        }
        const updatedAdmin = await this.adminModel.findOneAndUpdate({ email: email }, updateAdminDto, { new: true });
        if (!updatedAdmin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return updatedAdmin;
    }
    async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, this.JWT_SECRET);
            return { valid: true, decoded };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(register_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RegisterService);
//# sourceMappingURL=register.service.js.map
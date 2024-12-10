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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const createAdmin_dto_1 = require("./dto/createAdmin.dto");
const updateAdmin_dto_1 = require("./dto/updateAdmin.dto");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    async create(createAdminDto) {
        return this.registerService.create(createAdminDto);
    }
    async loginUser(loginDto) {
        return this.registerService.loginUser(loginDto);
    }
    async getOtp(email) {
        if (!email) {
            throw new common_1.BadRequestException('Email parameter is required');
        }
        return this.registerService.sentotp(email);
    }
    async verifyOtp(otp) {
        if (!otp) {
            throw new common_1.BadRequestException('otp parameter is required');
        }
        return this.registerService.verifyotp(otp);
    }
    async updatepassword(updateAdminDto) {
        const { email, password, confirmPassword } = updateAdminDto;
        if (!email || !password) {
            throw new common_1.BadRequestException('Email and password are required');
        }
        if (password != confirmPassword) {
            throw new common_1.BadRequestException('Email and password are required');
        }
        return this.registerService.updatePassword(updateAdminDto);
    }
    async verifyToken(request) {
        const token = request.headers['authorization']?.split(' ')[1] || '';
        if (!token) {
            throw new common_1.UnauthorizedException('Token is missing');
        }
        const decoded = await this.registerService.verifyToken(token);
        return decoded;
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Post)('createAdmin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAdmin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Get)('/getotp'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "getOtp", null);
__decorate([
    (0, common_1.Get)('/verifyotp'),
    __param(0, (0, common_1.Query)('otp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Put)('/updatepassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateAdmin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "updatepassword", null);
__decorate([
    (0, common_1.Get)('/verifytoken'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "verifyToken", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map
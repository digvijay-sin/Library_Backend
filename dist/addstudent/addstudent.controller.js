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
exports.AddstudentController = void 0;
const common_1 = require("@nestjs/common");
const addstudent_service_1 = require("./addstudent.service");
const createstudent_dto_1 = require("./dto/createstudent.dto");
const updatestudent_dto_1 = require("./dto/updatestudent.dto");
let AddstudentController = class AddstudentController {
    constructor(addStudentService) {
        this.addStudentService = addStudentService;
    }
    async create(createStudentDto) {
        return this.addStudentService.createStudent(createStudentDto);
    }
    async getStudentById(id) {
        return this.addStudentService.getStudent(id);
    }
    async updateStudent(id, updateStudentDto) {
        return this.addStudentService.updateStudent(id, updateStudentDto);
    }
};
exports.AddstudentController = AddstudentController;
__decorate([
    (0, common_1.Post)('/addStudent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createstudent_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], AddstudentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/getStudent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddstudentController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Put)('/updateStudent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updatestudent_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], AddstudentController.prototype, "updateStudent", null);
exports.AddstudentController = AddstudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [addstudent_service_1.AddstudentService])
], AddstudentController);
//# sourceMappingURL=addstudent.controller.js.map
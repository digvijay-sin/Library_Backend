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
exports.AddstudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const addstudent_schema_1 = require("./addstudent.schema");
let AddstudentService = class AddstudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async createStudent(createStudentDto) {
        const createdStudent = new this.studentModel(createStudentDto);
        return createdStudent.save();
    }
    async getStudent(id) {
        const student = await this.studentModel.findOne({ studentId: id });
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
    async updateStudent(id, updateStudentDto) {
        const updatedStudent = await this.studentModel.findOneAndUpdate({ studentId: id }, updateStudentDto, { new: true });
        return updatedStudent;
    }
};
exports.AddstudentService = AddstudentService;
exports.AddstudentService = AddstudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(addstudent_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddstudentService);
//# sourceMappingURL=addstudent.service.js.map
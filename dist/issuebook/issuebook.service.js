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
exports.IssuebookService = void 0;
const common_1 = require("@nestjs/common");
const issuebook_schema_1 = require("./issuebook.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const addstudent_schema_1 = require("../addstudent/addstudent.schema");
const addbook_schema_1 = require("../addbook/addbook.schema");
let IssuebookService = class IssuebookService {
    constructor(issueBookModel, studentModel, bookModel) {
        this.issueBookModel = issueBookModel;
        this.studentModel = studentModel;
        this.bookModel = bookModel;
    }
    async create(createBookIssueDto) {
        const student = await this.studentModel.findOne({ studentId: createBookIssueDto.studentId });
        const book = await this.bookModel.findOne({ bookId: createBookIssueDto.bookId });
        if (!student || !book) {
            throw new common_1.NotFoundException(`Student with ID ${createBookIssueDto.studentId} not found`);
        }
        const created = new this.issueBookModel(createBookIssueDto);
        return created.save();
    }
};
exports.IssuebookService = IssuebookService;
exports.IssuebookService = IssuebookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(issuebook_schema_1.IssueBook.name)),
    __param(1, (0, mongoose_1.InjectModel)(addstudent_schema_1.Student.name)),
    __param(2, (0, mongoose_1.InjectModel)(addbook_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model])
], IssuebookService);
//# sourceMappingURL=issuebook.service.js.map
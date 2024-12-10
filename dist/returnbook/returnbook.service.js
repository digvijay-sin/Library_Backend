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
exports.ReturnbookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const addbook_schema_1 = require("../addbook/addbook.schema");
const addstudent_schema_1 = require("../addstudent/addstudent.schema");
const issuebook_schema_1 = require("../issuebook/issuebook.schema");
const returnbook_schema_1 = require("./returnbook.schema");
let ReturnbookService = class ReturnbookService {
    constructor(bookModel, studentModel, issueBookModel, returnBookModel) {
        this.bookModel = bookModel;
        this.studentModel = studentModel;
        this.issueBookModel = issueBookModel;
        this.returnBookModel = returnBookModel;
    }
    async getStudentBookInformation(createReturnDto) {
        const { studentId, bookId } = createReturnDto;
        const issuebook = await this.issueBookModel.findOne({ studentId, bookId }).exec();
        if (!issuebook) {
            throw new common_1.NotFoundException(`No book issue record found for Student ID ${studentId} and Book ID ${bookId}`);
        }
        const student = await this.studentModel.findOne({ studentId }).exec();
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${studentId} not found`);
        }
        const book = await this.bookModel.findOne({ bookId }).exec();
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${bookId} not found`);
        }
        return {
            issuebook,
            student,
            book,
        };
    }
    async returnBook(returnBookDto) {
        const returnBook = new this.returnBookModel(returnBookDto);
        return returnBook.save();
    }
};
exports.ReturnbookService = ReturnbookService;
exports.ReturnbookService = ReturnbookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(addbook_schema_1.Book.name)),
    __param(1, (0, mongoose_1.InjectModel)(addstudent_schema_1.Student.name)),
    __param(2, (0, mongoose_1.InjectModel)(issuebook_schema_1.IssueBook.name)),
    __param(3, (0, mongoose_1.InjectModel)(returnbook_schema_1.ReturnBook.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model,
        mongoose_2.Model])
], ReturnbookService);
//# sourceMappingURL=returnbook.service.js.map
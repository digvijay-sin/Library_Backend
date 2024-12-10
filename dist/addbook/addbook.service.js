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
exports.AddbookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const addbook_schema_1 = require("./addbook.schema");
const mongoose_2 = require("mongoose");
let AddbookService = class AddbookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async createBook(createBookDto) {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }
    async getAllBook() {
        return this.bookModel.find().exec();
    }
    async searchBooks(query) {
        if (!query) {
            return this.bookModel.find().exec();
        }
        return this.bookModel.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { isbn: { $regex: query, $options: 'i' } },
                { publisher: { $regex: query, $options: 'i' } },
            ],
        }).exec();
    }
    async decrementCopies(id) {
        const book = await this.bookModel.findOne({ bookId: id });
        if (!book) {
            throw new Error(`Book with ID ${id} not found`);
        }
        if (book.copies <= 0) {
            throw new Error(`No copies available to decrement for book with ID ${id}`);
        }
        book.copies -= 1;
        return book.save();
    }
    async incrementCopies(id) {
        const book = await this.bookModel.findOne({ bookId: id });
        if (!book) {
            throw new Error(`Book with ID ${id} not found`);
        }
        book.copies += 1;
        return book.save();
    }
    async deleteBook(id) {
        const book = await this.bookModel.findOneAndDelete({ bookId: id });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
};
exports.AddbookService = AddbookService;
exports.AddbookService = AddbookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(addbook_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddbookService);
//# sourceMappingURL=addbook.service.js.map
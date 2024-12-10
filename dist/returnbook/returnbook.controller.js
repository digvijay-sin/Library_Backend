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
exports.ReturnbookController = void 0;
const common_1 = require("@nestjs/common");
const returnbook_service_1 = require("./returnbook.service");
const returnbook_dto_1 = require("./dto/returnbook.dto");
const addbook_service_1 = require("../addbook/addbook.service");
let ReturnbookController = class ReturnbookController {
    constructor(returnBookService, addBookService) {
        this.returnBookService = returnBookService;
        this.addBookService = addBookService;
    }
    async getStudentBook(query) {
        return this.returnBookService.getStudentBookInformation(query);
    }
    async returnBook(returnBookDto) {
        this.addBookService.incrementCopies(returnBookDto.bookId);
        return this.returnBookService.returnBook(returnBookDto);
    }
};
exports.ReturnbookController = ReturnbookController;
__decorate([
    (0, common_1.Get)('getdata'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReturnbookController.prototype, "getStudentBook", null);
__decorate([
    (0, common_1.Post)('/returnBook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [returnbook_dto_1.ReturnBookDto]),
    __metadata("design:returntype", Promise)
], ReturnbookController.prototype, "returnBook", null);
exports.ReturnbookController = ReturnbookController = __decorate([
    (0, common_1.Controller)('return'),
    __metadata("design:paramtypes", [returnbook_service_1.ReturnbookService, addbook_service_1.AddbookService])
], ReturnbookController);
//# sourceMappingURL=returnbook.controller.js.map
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
exports.AddbookController = void 0;
const common_1 = require("@nestjs/common");
const addbook_service_1 = require("./addbook.service");
const addbook_dto_1 = require("./dto/addbook.dto");
let AddbookController = class AddbookController {
    constructor(addBookService) {
        this.addBookService = addBookService;
    }
    async createBook(createBookDto) {
        return this.addBookService.createBook(createBookDto);
    }
    async getAllBook() {
        return this.addBookService.getAllBook();
    }
    async searchBooks(query) {
        return this.addBookService.searchBooks(query);
    }
    async deleteBook(id) {
        return this.addBookService.deleteBook(id);
    }
};
exports.AddbookController = AddbookController;
__decorate([
    (0, common_1.Post)('/addbook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addbook_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], AddbookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)('/getAllBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddbookController.prototype, "getAllBook", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddbookController.prototype, "searchBooks", null);
__decorate([
    (0, common_1.Delete)('deleteBook/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddbookController.prototype, "deleteBook", null);
exports.AddbookController = AddbookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [addbook_service_1.AddbookService])
], AddbookController);
//# sourceMappingURL=addbook.controller.js.map
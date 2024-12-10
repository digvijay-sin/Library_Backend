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
exports.IssuebookController = void 0;
const common_1 = require("@nestjs/common");
const issuebook_service_1 = require("./issuebook.service");
const issuebook_dto_1 = require("./dto/issuebook.dto");
const addbook_service_1 = require("../addbook/addbook.service");
let IssuebookController = class IssuebookController {
    constructor(issueBookService, addBookService) {
        this.issueBookService = issueBookService;
        this.addBookService = addBookService;
    }
    async create(createBookIssueDto) {
        this.addBookService.decrementCopies(createBookIssueDto.bookId);
        return this.issueBookService.create(createBookIssueDto);
    }
};
exports.IssuebookController = IssuebookController;
__decorate([
    (0, common_1.Post)('/student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [issuebook_dto_1.CreateIssueBookDto]),
    __metadata("design:returntype", Promise)
], IssuebookController.prototype, "create", null);
exports.IssuebookController = IssuebookController = __decorate([
    (0, common_1.Controller)('issuebook'),
    __metadata("design:paramtypes", [issuebook_service_1.IssuebookService, addbook_service_1.AddbookService])
], IssuebookController);
//# sourceMappingURL=issuebook.controller.js.map
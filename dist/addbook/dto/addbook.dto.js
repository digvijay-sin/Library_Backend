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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Book ID must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Book ID is required.' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "bookId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Book Name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Book Name is required.' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'ISBN must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ISBN is required.' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "isbn", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Publisher must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Publisher is required.' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "publisher", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Edition must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Edition is required.' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "edition", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Price must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price is required.' }),
    (0, class_validator_1.Min)(0, { message: 'Price must be a positive number.' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Copies must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Available Copies are required.' }),
    (0, class_validator_1.Min)(1, { message: 'Copies must be at least 1.' }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "copies", void 0);
//# sourceMappingURL=addbook.dto.js.map
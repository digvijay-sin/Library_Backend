"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuebookModule = void 0;
const common_1 = require("@nestjs/common");
const issuebook_service_1 = require("./issuebook.service");
const issuebook_controller_1 = require("./issuebook.controller");
const mongoose_1 = require("@nestjs/mongoose");
const issuebook_schema_1 = require("./issuebook.schema");
const addstudent_schema_1 = require("../addstudent/addstudent.schema");
const addbook_schema_1 = require("../addbook/addbook.schema");
const addbook_service_1 = require("../addbook/addbook.service");
let IssuebookModule = class IssuebookModule {
};
exports.IssuebookModule = IssuebookModule;
exports.IssuebookModule = IssuebookModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: issuebook_schema_1.IssueBook.name, schema: issuebook_schema_1.IssueBookSchema }]), mongoose_1.MongooseModule.forFeature([{ name: addstudent_schema_1.Student.name, schema: addstudent_schema_1.StudentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: addbook_schema_1.Book.name, schema: addbook_schema_1.BookSchema }])],
        providers: [issuebook_service_1.IssuebookService, addbook_service_1.AddbookService],
        controllers: [issuebook_controller_1.IssuebookController]
    })
], IssuebookModule);
//# sourceMappingURL=issuebook.module.js.map
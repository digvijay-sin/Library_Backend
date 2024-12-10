"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddbookModule = void 0;
const common_1 = require("@nestjs/common");
const addbook_controller_1 = require("./addbook.controller");
const addbook_service_1 = require("./addbook.service");
const mongoose_1 = require("@nestjs/mongoose");
const addbook_schema_1 = require("./addbook.schema");
let AddbookModule = class AddbookModule {
};
exports.AddbookModule = AddbookModule;
exports.AddbookModule = AddbookModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: addbook_schema_1.Book.name, schema: addbook_schema_1.BookSchema }])],
        controllers: [addbook_controller_1.AddbookController],
        providers: [addbook_service_1.AddbookService]
    })
], AddbookModule);
//# sourceMappingURL=addbook.module.js.map
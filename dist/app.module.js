"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const register_module_1 = require("./register/register.module");
const mongoose_1 = require("@nestjs/mongoose");
const addbook_module_1 = require("./addbook/addbook.module");
const addstudent_module_1 = require("./addstudent/addstudent.module");
const issuebook_module_1 = require("./issuebook/issuebook.module");
const returnbook_module_1 = require("./returnbook/returnbook.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/libraryproject'),
            register_module_1.RegisterModule,
            addbook_module_1.AddbookModule,
            addstudent_module_1.AddstudentModule,
            issuebook_module_1.IssuebookModule,
            returnbook_module_1.ReturnbookModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
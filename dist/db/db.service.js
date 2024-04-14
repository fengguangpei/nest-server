"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const libsql_1 = require("../libsql/libsql");
const mysql_1 = require("../mysql/mysql");
let DbService = class DbService {
    constructor() {
        this.mysql = mysql_1.mysqlInstance;
        this.libsql = libsql_1.libsqlInstance;
    }
};
exports.DbService = DbService;
exports.DbService = DbService = __decorate([
    (0, common_1.Injectable)()
], DbService);
//# sourceMappingURL=db.service.js.map
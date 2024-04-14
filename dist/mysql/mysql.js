"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlInstance = void 0;
const mysql2_1 = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const schema = require("./schema");
require("dotenv/config");
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
exports.mysqlInstance = (0, mysql2_1.drizzle)(connection, { schema, mode: 'default' });
//# sourceMappingURL=mysql.js.map
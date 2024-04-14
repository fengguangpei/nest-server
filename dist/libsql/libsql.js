"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libsqlInstance = void 0;
const libsql_1 = require("drizzle-orm/libsql");
const client_1 = require("@libsql/client");
const schema = require("./schema");
require("dotenv/config");
const client = (0, client_1.createClient)({
    url: process.env.TURSO_CONNECTION_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});
exports.libsqlInstance = (0, libsql_1.drizzle)(client, { schema: schema });
//# sourceMappingURL=libsql.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    schema: './src/libsql/schema.ts',
    out: './src/libsql/',
    driver: 'turso',
    dbCredentials: {
        url: process.env.TURSO_CONNECTION_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
    },
});
//# sourceMappingURL=libsql.config.js.map
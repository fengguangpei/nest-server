"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.users = (0, sqlite_core_1.sqliteTable)('users', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    name: (0, sqlite_core_1.text)('name').notNull(),
    email: (0, sqlite_core_1.text)('email').unique().notNull(),
});
exports.posts = (0, sqlite_core_1.sqliteTable)('posts', {
    id: (0, sqlite_core_1.integer)('id').primaryKey(),
    title: (0, sqlite_core_1.text)('title').notNull(),
    content: (0, sqlite_core_1.text)('content').notNull(),
    userId: (0, sqlite_core_1.integer)('user_id')
        .notNull()
        .references(() => exports.users.id, { onDelete: 'cascade' }),
    createdAt: (0, sqlite_core_1.text)('created_at')
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
});
//# sourceMappingURL=schema.js.map
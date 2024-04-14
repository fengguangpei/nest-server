export declare const users: import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "id";
            tableName: "users";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        name: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "name";
            tableName: "users";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        email: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
    };
    dialect: "sqlite";
}>;
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export declare const posts: import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: "posts";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "id";
            tableName: "posts";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        title: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "title";
            tableName: "posts";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        content: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "content";
            tableName: "posts";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        userId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "user_id";
            tableName: "posts";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "created_at";
            tableName: "posts";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
    };
    dialect: "sqlite";
}>;
export type InsertPost = typeof posts.$inferInsert;
export type SelectPost = typeof posts.$inferSelect;

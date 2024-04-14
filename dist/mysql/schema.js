"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderView = exports.suppliers = exports.products = exports.orders = exports.orderDetails = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.orderDetails = (0, mysql_core_1.mysqlTable)('order_details', {
    orderId: (0, mysql_core_1.int)('orderId')
        .notNull()
        .references(() => exports.orders.id),
    productId: (0, mysql_core_1.int)('productId')
        .notNull()
        .references(() => exports.products.id),
    quantity: (0, mysql_core_1.int)('quantity').notNull(),
});
exports.orders = (0, mysql_core_1.mysqlTable)('orders', {
    id: (0, mysql_core_1.int)('id').notNull(),
    orderDate: (0, mysql_core_1.date)('orderDate', { mode: 'string' }).notNull(),
    shippedDate: (0, mysql_core_1.date)('shippedDate', { mode: 'string' }),
    shipAddress: (0, mysql_core_1.varchar)('shipAddress', { length: 255 }).notNull(),
    shipPostalCode: (0, mysql_core_1.varchar)('shipPostalCode', { length: 255 }),
    shipCountry: (0, mysql_core_1.varchar)('shipCountry', { length: 255 }).notNull(),
}, (table) => {
    return {
        ordersId: (0, mysql_core_1.primaryKey)({ columns: [table.id], name: 'orders_id' }),
    };
});
exports.products = (0, mysql_core_1.mysqlTable)('products', {
    id: (0, mysql_core_1.int)('id').autoincrement().notNull(),
    name: (0, mysql_core_1.varchar)('name', { length: 100 }).notNull(),
    supplierId: (0, mysql_core_1.int)('supplierId')
        .notNull()
        .references(() => exports.suppliers.id),
    unitPrice: (0, mysql_core_1.decimal)('unitPrice', { precision: 10, scale: 4 }).notNull(),
    unitsInStock: (0, mysql_core_1.int)('unitsInStock').notNull(),
}, (table) => {
    return {
        productsId: (0, mysql_core_1.primaryKey)({ columns: [table.id], name: 'products_id' }),
    };
});
exports.suppliers = (0, mysql_core_1.mysqlTable)('suppliers', {
    id: (0, mysql_core_1.int)('id').notNull(),
    companyName: (0, mysql_core_1.varchar)('companyName', { length: 255 }).notNull(),
    city: (0, mysql_core_1.varchar)('city', { length: 255 }),
    country: (0, mysql_core_1.varchar)('country', { length: 255 }).notNull(),
}, (table) => {
    return {
        suppliersId: (0, mysql_core_1.primaryKey)({ columns: [table.id], name: 'suppliers_id' }),
    };
});
exports.orderView = (0, mysql_core_1.mysqlView)('order_view').as((qb) => qb.select().from(exports.orders));
//# sourceMappingURL=schema.js.map
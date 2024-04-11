import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  foreignKey,
  int,
  primaryKey,
  date,
  varchar,
  decimal,
  mysqlView,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

// table
export const orderDetails = mysqlTable('order_details', {
  orderId: int('orderId')
    .notNull()
    .references(() => orders.id),
  productId: int('productId')
    .notNull()
    .references(() => products.id),
  quantity: int('quantity').notNull(),
});

export const orders = mysqlTable(
  'orders',
  {
    id: int('id').notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    orderDate: date('orderDate', { mode: 'string' }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    shippedDate: date('shippedDate', { mode: 'string' }),
    shipAddress: varchar('shipAddress', { length: 255 }).notNull(),
    shipPostalCode: varchar('shipPostalCode', { length: 255 }),
    shipCountry: varchar('shipCountry', { length: 255 }).notNull(),
  },
  (table) => {
    return {
      ordersId: primaryKey({ columns: [table.id], name: 'orders_id' }),
    };
  },
);

export const products = mysqlTable(
  'products',
  {
    id: int('id').autoincrement().notNull(),
    name: varchar('name', { length: 100 }).notNull(),
    supplierId: int('supplierId')
      .notNull()
      .references(() => suppliers.id),
    unitPrice: decimal('unitPrice', { precision: 10, scale: 4 }).notNull(),
    unitsInStock: int('unitsInStock').notNull(),
  },
  (table) => {
    return {
      productsId: primaryKey({ columns: [table.id], name: 'products_id' }),
    };
  },
);

export const suppliers = mysqlTable(
  'suppliers',
  {
    id: int('id').notNull(),
    companyName: varchar('companyName', { length: 255 }).notNull(),
    city: varchar('city', { length: 255 }),
    country: varchar('country', { length: 255 }).notNull(),
  },
  (table) => {
    return {
      suppliersId: primaryKey({ columns: [table.id], name: 'suppliers_id' }),
    };
  },
);

// view
export const orderView = mysqlView('order_view').as((qb) =>
  qb.select().from(orders),
);

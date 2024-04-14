export declare const orderDetails: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "order_details";
    schema: undefined;
    columns: {
        orderId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "orderId";
            tableName: "order_details";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        productId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "productId";
            tableName: "order_details";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        quantity: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "quantity";
            tableName: "order_details";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const orders: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "orders";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "orders";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        orderDate: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "orderDate";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlDateString";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        shippedDate: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "shippedDate";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlDateString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        shipAddress: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "shipAddress";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        shipPostalCode: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "shipPostalCode";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        shipCountry: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "shipCountry";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const products: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "products";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "products";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        name: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "name";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        supplierId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "supplierId";
            tableName: "products";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        unitPrice: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "unitPrice";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlDecimal";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        unitsInStock: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "unitsInStock";
            tableName: "products";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const suppliers: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "suppliers";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "suppliers";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        companyName: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "companyName";
            tableName: "suppliers";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        city: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "city";
            tableName: "suppliers";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        country: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "country";
            tableName: "suppliers";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const orderView: import("drizzle-orm/mysql-core").MySqlViewWithSelection<"order_view", false, {
    id: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "id";
        tableName: "order_view";
        dataType: "number";
        columnType: "MySqlInt";
        data: number;
        driverParam: string | number;
        notNull: true;
        hasDefault: false;
        enumValues: undefined;
        baseColumn: never;
    }, object>;
    orderDate: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "orderDate";
        tableName: "order_view";
        dataType: "string";
        columnType: "MySqlDateString";
        data: string;
        driverParam: string | number;
        notNull: true;
        hasDefault: false;
        enumValues: undefined;
        baseColumn: never;
    }, object>;
    shippedDate: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "shippedDate";
        tableName: "order_view";
        dataType: "string";
        columnType: "MySqlDateString";
        data: string;
        driverParam: string | number;
        notNull: false;
        hasDefault: false;
        enumValues: undefined;
        baseColumn: never;
    }, object>;
    shipAddress: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "shipAddress";
        tableName: "order_view";
        dataType: "string";
        columnType: "MySqlVarChar";
        data: string;
        driverParam: string | number;
        notNull: true;
        hasDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
    }, object>;
    shipPostalCode: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "shipPostalCode";
        tableName: "order_view";
        dataType: "string";
        columnType: "MySqlVarChar";
        data: string;
        driverParam: string | number;
        notNull: false;
        hasDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
    }, object>;
    shipCountry: import("drizzle-orm/mysql-core").MySqlColumn<{
        name: "shipCountry";
        tableName: "order_view";
        dataType: "string";
        columnType: "MySqlVarChar";
        data: string;
        driverParam: string | number;
        notNull: true;
        hasDefault: false;
        enumValues: [string, ...string[]];
        baseColumn: never;
    }, object>;
}>;

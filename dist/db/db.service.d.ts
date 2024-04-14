import { MySql2Database } from 'drizzle-orm/mysql2';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import * as mysqlSchema from '../mysql/schema';
import * as libsqlSchema from '../libsql/schema';
export declare class DbService {
    readonly mysql: MySql2Database<typeof mysqlSchema>;
    readonly libsql: LibSQLDatabase<typeof libsqlSchema>;
}

import { Injectable } from '@nestjs/common';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import * as mysqlSchema from '../mysql/schema';
import * as libsqlSchema from '../libsql/schema';
import { libsqlInstance } from 'src/libsql/libsql';
import { mysqlInstance } from 'src/mysql/mysql';
@Injectable()
export class DbService {
  // readonly mysql: MySql2Database<typeof mysqlSchema> = mysqlInstance;
  readonly libsql: LibSQLDatabase<typeof libsqlSchema> = libsqlInstance;
}

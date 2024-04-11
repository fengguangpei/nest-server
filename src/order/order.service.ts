import { Injectable } from '@nestjs/common';
import { eq, sql, sum } from 'drizzle-orm';
import { DbService } from 'src/db/db.service';
import { orderDetails, orderView } from 'src/mysql/schema';

@Injectable()
export class OrderService {
  constructor(private readonly dbService: DbService) {}

  async orderLists() {
    const list = await this.dbService.mysql.select().from(orderView);
    return list;
  }
}

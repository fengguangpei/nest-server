import { Injectable } from '@nestjs/common';
import { eq, sql, sum } from 'drizzle-orm';
import { DbService } from 'src/db/db.service';
import { orderDetails, orders } from 'src/mysql/schema';

@Injectable()
export class OrderService {
  constructor(private readonly dbService: DbService) {}

  async orderLists() {
    const list = await this.dbService.mysql
      .select()
      .from(orders)
      .leftJoin(orderDetails, eq(orders.id, orderDetails.orderId));
    return list;
  }
}

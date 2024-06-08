import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/list')
  async orderList() {
    const list = this.orderService.orderLists();
    await new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 3000);
    });
    return list;
  }
}

import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    orderList(): Promise<{
        order_details: {
            orderId: number;
            productId: number;
            quantity: number;
        };
        orders: {
            id: number;
            orderDate: string;
            shippedDate: string;
            shipAddress: string;
            shipPostalCode: string;
            shipCountry: string;
        };
    }[]>;
}

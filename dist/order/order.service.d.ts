import { DbService } from 'src/db/db.service';
export declare class OrderService {
    private readonly dbService;
    constructor(dbService: DbService);
    orderLists(): Promise<{
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

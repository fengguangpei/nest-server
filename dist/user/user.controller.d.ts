import { UserService } from './user.service';
import { InsertUser } from 'src/libsql/schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: InsertUser): Promise<import("@libsql/core/api").ResultSet>;
    userWithoutPost(): Promise<{
        id: number;
        name: string;
        eamil: string;
    }[]>;
}

import { DbService } from 'src/db/db.service';
import { InsertUser } from 'src/libsql/schema';
export declare class UserService {
    private readonly dbService;
    constructor(dbService: DbService);
    createUser(user: InsertUser): Promise<import("@libsql/core/api").ResultSet>;
    userWithoutPost(): Promise<{
        id: number;
        name: string;
        eamil: string;
    }[]>;
}

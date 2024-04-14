import { DbService } from 'src/db/db.service';
import { InsertPost } from 'src/libsql/schema';
export declare class PostService {
    private readonly dbService;
    constructor(dbService: DbService);
    createPost(post: InsertPost): Promise<import("@libsql/core/api").ResultSet>;
    deletePost(id: InsertPost['id']): Promise<import("@libsql/core/api").ResultSet>;
    postList(): Promise<{
        name: string;
        email: string;
        number: number;
    }[]>;
}

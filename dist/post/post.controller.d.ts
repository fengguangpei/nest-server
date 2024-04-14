import { InsertPost } from 'src/libsql/schema';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(post: InsertPost): Promise<import("@libsql/core/api").ResultSet>;
    deleteById(id: InsertPost['id']): Promise<import("@libsql/core/api").ResultSet>;
    postList(): Promise<{
        name: string;
        email: string;
        number: number;
    }[]>;
}

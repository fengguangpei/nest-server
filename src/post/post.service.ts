import { Injectable } from '@nestjs/common';
import { count, eq, gt, sql } from 'drizzle-orm';
import { DbService } from 'src/db/db.service';
import { InsertPost, posts, users } from 'src/libsql/schema';

@Injectable()
export class PostService {
  constructor(private readonly dbService: DbService) {}

  async createPost(post: InsertPost) {
    return await this.dbService.libsql.insert(posts).values(post);
  }

  async deletePost(id: InsertPost['id']) {
    return await this.dbService.libsql.delete(posts).where(eq(posts.id, id));
  }

  // 查询用户
  async postList() {
    return await this.dbService.libsql
      .select({
        name: sql<string>`UPPER(${users.name})`,
        email: users.email,
        number: count(),
      })
      .from(posts)
      .innerJoin(users, eq(users.id, posts.userId))
      .groupBy(users.id)
      .having(({ number }) => gt(number, 1));
  }
}

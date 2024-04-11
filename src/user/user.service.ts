import { Injectable } from '@nestjs/common';
import { eq, isNull } from 'drizzle-orm';
import { DbService } from 'src/db/db.service';
import { InsertUser, users, posts } from 'src/libsql/schema';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  async createUser(user: InsertUser) {
    return await this.dbService.libsql.insert(users).values(user);
  }

  // 查询没有发表文章的用户
  async userWithoutPost() {
    return await this.dbService.libsql
      .select({
        id: users.id,
        name: users.name,
        eamil: users.email,
      })
      .from(users)
      .leftJoin(posts, eq(users.id, posts.userId))
      .where(isNull(posts.id));
  }
}

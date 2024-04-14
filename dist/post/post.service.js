"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const drizzle_orm_1 = require("drizzle-orm");
const db_service_1 = require("../db/db.service");
const schema_1 = require("../libsql/schema");
let PostService = class PostService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async createPost(post) {
        return await this.dbService.libsql.insert(schema_1.posts).values(post);
    }
    async deletePost(id) {
        return await this.dbService.libsql.delete(schema_1.posts).where((0, drizzle_orm_1.eq)(schema_1.posts.id, id));
    }
    async postList() {
        return await this.dbService.libsql
            .select({
            name: (0, drizzle_orm_1.sql) `UPPER(${schema_1.users.name})`,
            email: schema_1.users.email,
            number: (0, drizzle_orm_1.count)(),
        })
            .from(schema_1.posts)
            .innerJoin(schema_1.users, (0, drizzle_orm_1.eq)(schema_1.users.id, schema_1.posts.userId))
            .groupBy(schema_1.users.id)
            .having(({ number }) => (0, drizzle_orm_1.gt)(number, 1));
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], PostService);
//# sourceMappingURL=post.service.js.map
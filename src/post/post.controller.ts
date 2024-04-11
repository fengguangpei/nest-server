import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InsertPost } from 'src/libsql/schema';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // create new post
  @Post('/new')
  createPost(@Body() post: InsertPost) {
    return this.postService.createPost(post);
  }

  // delete post by id
  @Get('/delete/:id')
  deleteById(@Param('id') id: InsertPost['id']) {
    return this.postService.deletePost(id);
  }

  @Get('list')
  postList() {
    return this.postService.postList();
  }
}

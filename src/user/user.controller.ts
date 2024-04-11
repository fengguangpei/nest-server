import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { InsertUser } from 'src/libsql/schema';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/new')
  createUser(@Body() user: InsertUser) {
    return this.userService.createUser(user);
  }

  @Get('/withoutPost')
  userWithoutPost() {
    return this.userService.userWithoutPost();
  }
}

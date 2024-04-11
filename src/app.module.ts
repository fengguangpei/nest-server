import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { OrderModule } from './order/order.module';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';

@Module({
  imports: [DbModule, UserModule, PostModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}

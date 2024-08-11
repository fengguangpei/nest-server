import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { OrderModule } from './order/order.module';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'node:path';

@Module({
  imports: [
    DbModule,
    UserModule,
    PostModule,
    OrderModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   playground: true,
    //   typePaths: ['*/**/*.graphql'],
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //     outputAs: 'class',
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { OrderModule } from './order/order.module';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ProductModule } from './product/product.module';
import { join } from 'node:path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProductModule } from './product/product.module';
import { CustomUuidScalar } from './scalars/CustomUuidScalar';
import { WebsocketModule } from './websocket/websocket.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
@Module({
  imports: [
    DbModule,
    // UserModule,
    PostModule,
    OrderModule,
    // ProductModule,
    // MongooseModule.forRoot('mongodb://localhost/test'),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), './src/schema.gql'),
    //   playground: false,
    //   include: [ProductModule],
    //   subscriptions: {
    //     'graphql-ws': true,
    //   },
    //   buildSchemaOptions: {
    //     dateScalarMode: 'timestamp',
    //   },
    //   resolvers: {
    //     UUID: CustomUuidScalar,
    //   },
    //   // typePaths: ['./**/*.graphql'],
    //   // definitions: {
    //   //   path: join(process.cwd(), './src/graphql.ts'),
    //   //   outputAs: 'class',
    //   // },
    //   plugins: [ApolloServerPluginLandingPageLocalDefault()],
    // }),
    // WebsocketModule,
    // CatModule,
  ],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}

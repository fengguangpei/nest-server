import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { CustomUuidScalar } from 'src/scalars/CustomUuidScalar';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;
  @Field(() => CustomUuidScalar)
  supplierId: number;
  @Field()
  name: string;
  @Field(() => Float)
  unitPrice: string;
  @Field(() => Int)
  unitsInStock: number;
  @Field()
  date: Date;
}

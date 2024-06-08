import { InputType, Field, ID, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;
  @Field(() => Float)
  unitPrice: string;
  @Field(() => Int)
  unitsInStock: number;
  @Field(() => ID)
  supplierId: number;
}

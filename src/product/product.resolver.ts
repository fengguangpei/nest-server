import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PubSub } from 'graphql-subscriptions';
import { Subscription } from '@nestjs/graphql';

@Resolver(() => Product)
export class ProductResolver {
  private readonly pubSub = new PubSub();
  constructor(private readonly productService: ProductService) {}

  @Subscription(() => Product)
  productCreated() {
    return this.pubSub.asyncIterator('productCreated');
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    const res = await this.productService.create(createProductInput);
    this.pubSub.publish('productCreated', { productCreated: res });
    return res;
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}

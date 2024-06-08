import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DbService } from 'src/db/db.service';
import { products } from 'src/mysql/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class ProductService {
  constructor(private readonly dbService: DbService) {}

  async create(createProductInput: CreateProductInput) {
    const [{ insertId }] = await this.dbService.mysql
      .insert(products)
      .values(createProductInput);
    return { id: insertId, ...createProductInput };
  }

  findAll() {
    return this.dbService.mysql.select().from(products);
  }

  findOne(id: number) {
    return this.dbService.mysql
      .select()
      .from(products)
      .where(eq(products.id, id));
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.dbService.mysql
      .update(products)
      .set(updateProductInput)
      .where(eq(products.id, id));
  }

  remove(id: number) {
    return this.dbService.mysql.delete(products).where(eq(products.id, id));
  }
}

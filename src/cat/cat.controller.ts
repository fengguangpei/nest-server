import { Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('/list')
  async findAll() {
    const arr = await this.catService.findAll();
    return arr;
  }

  @Post('/newCat')
  async create() {
    const res = await this.catService.created();
    return res;
  }
}

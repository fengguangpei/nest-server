import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatModel, ICat } from './cat.schema';
@Injectable()
export class CatService {
  constructor(@InjectModel('cats') private catModel: CatModel) {}

  async findAll() {
    const res = this.catModel
      .find<ICat>()
      .sort({ age: 1, name: -1 })
      .select(['name', 'age'])
      .exec();
    return res;
  }

  async created() {
    const newCat = new this.catModel({
      name: 'xiexiaolv2',
      age: 29,
      breed: 'fruit tea2',
    });
    const res = await newCat.save();
    return res;
  }
}

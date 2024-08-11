import { HydratedDocument, Schema, model } from 'mongoose';
export interface ICat {
  name: string;
  age: number;
  breed: string;
}
export const CatSchema = new Schema<ICat>({
  name: String,
  age: Number,
  breed: String,
});

export const CatModel = model<ICat>('cat', CatSchema);

export type CatModel = typeof CatModel;

export type CatDocument = HydratedDocument<ICat>;

import { Model } from 'sequelize';
import { Product } from './types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const create = (
  data: ProductInputtableTypes,
): Promise<Model<Product, ProductInputtableTypes>> => ProductModel.create(data); 

const list = async (): Promise<Model<Product, ProductInputtableTypes>[]> => {
  const products = (await ProductModel.findAll());
  return products;
};

export default {
  create,
  list,
};
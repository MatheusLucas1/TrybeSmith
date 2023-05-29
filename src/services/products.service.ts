import { Product } from './types/Product';
import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';

async function create(product: ProductInputtableTypes) : Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}  

async function list() : Promise<ProductSequelizeModel[]> {
  const products = await ProductModel.findAll();

  return products;
}

export default {
  create,
  list,
};
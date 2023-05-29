import OrderModel, { 
  OrderInputtableTypes, 
  OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const list = async (): Promise<{ id: number; userId: number; productIds: number[]; }[]> => {
  const products = (await ProductModel.findAll());
  const orders = (await OrderModel.findAll());
  const newOrderArr: { id: number, userId: number, productIds: number[] }[] = [];
  orders.forEach(({ dataValues: { id, userId } }) => {
    newOrderArr.push({
      id,
      userId,
      productIds: products
        .filter(
          (prod) => prod.dataValues.orderId === id,
        )
        .map((prod) => prod.dataValues.id),
    });
  });
  return newOrderArr;
};

export default {
  list,
};
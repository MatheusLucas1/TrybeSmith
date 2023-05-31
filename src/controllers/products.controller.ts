import { Request, Response } from 'express';
import productService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.create({ name, price, orderId });

  // const { orderId: id, ...productWithoutOrderId } = serviceResponse;
  res.status(201).json(serviceResponse);
}

async function list(req: Request, res: Response) {
  const serviceResponse = await productService.list();
  
  res.status(200).json(serviceResponse);
}

export default {
  create,
  list,
};
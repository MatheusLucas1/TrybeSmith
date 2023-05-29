import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function list(req: Request, res: Response) {
  const serviceResponse = await orderService.list();
  
  res.status(200).json(serviceResponse);
}

export default {
  list,
};
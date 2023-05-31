import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const list = async (req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.list();

  return res.status(200).json(orders);
};

export default {
  list,
};
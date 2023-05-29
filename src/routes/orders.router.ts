import { Router } from 'express';
import orderController from '../controllers/orders.controller';

const orderRouter = Router();
orderRouter.get('/orders', orderController.list);

export default orderRouter;
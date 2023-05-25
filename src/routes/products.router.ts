import { Router } from 'express';
import productController from '../controllers/product.controller';

const productsRouter = Router();
// transactionsRouter.get('/transactions', productController.list);
productsRouter.post('/products', productController.create);
// transactionsRouter.get('/transactions/:id', productController.findById);

export default productsRouter;
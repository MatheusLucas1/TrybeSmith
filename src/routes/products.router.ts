import { Router } from 'express';
import productController from '../controllers/products.controller';

const productsRouter = Router();
productsRouter.get('/products', productController.list);
productsRouter.post('/products', productController.create);
// productsRouter.get('/products/:id', productController.listById);

export default productsRouter;
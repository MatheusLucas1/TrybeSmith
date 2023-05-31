import { Router } from 'express';
import productController from '../controllers/products.controller';
import { validateProduct } from '../middlewares/product.middleware';

const productsRouter = Router();
productsRouter.get('/products', productController.list);
productsRouter.post('/products', validateProduct, productController.create);

export default productsRouter;
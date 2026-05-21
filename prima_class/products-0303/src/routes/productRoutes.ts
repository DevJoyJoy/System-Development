import express, { Request, Response, Router } from 'express';
import Product from '../models/products.ts';
import ProductController from '../controllers/productController.ts'
import { validadeMain } from '../middleware/productMiddleware.ts'

const router: Router = express.Router();

router
    .post('/register', validadeMain, ProductController.postProduct)
    .get('/product/:id', ProductController.getProductId)
    .get('/products', ProductController.getProducts)
    .put('/product/:id', ProductController.putProduct)
    .delete('/product/:id', ProductController.deleteProduct);
export default router;
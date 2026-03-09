import express, { Request, Response, Router } from 'express';
import Product from '../models/products.ts';
import ProductController from '../controllers/productController.ts'

const router: Router = express.Router();

router
    .post('/register', ProductController.postProduct)
    .get('/products', ProductController.getProducts)
    .put('/product/:id', ProductController.putProduct)
    .delete('/product/:id', ProductController.deleteProduct);
export default router;
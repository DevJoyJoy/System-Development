import { Request, Response } from "express";
import Product from '../models/products.ts';

class ProductController {
    static async getProducts(req: Request, res: Response){
        try {
            const product = await Product.find();
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar os produtos', error });
        }
    }
    
    static async postProduct(req: Request, res: Response){
        const { name, description, price, stock, category, createdAt } = req.body;
        try {
            const product = new Product({ name, description, price, stock, category, createdAt });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar produto', error });
        }
    }

    static async putProduct(req: Request, res: Response){
        const { id } = req.params;
        const { name, description, price, stock, category, createdAt } = req.body;
        
        try {
            const product = await Product.findByIdAndUpdate(id, { name, description, price, stock, category, createdAt}, { new: true });
            if (!product) {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar produto', error });
        }
    }

    static async deleteProduct(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar produto', error });
        }
    }
}

export default ProductController;
import { registerProductDTO } from "../dto/productDTO.ts";
import Product from "../models/products.ts";

export async function register(data: registerProductDTO){
    const {name, description, price, stock, category} = data
    const createdAt = new Date();
    const product = new Product({ name, description, price, stock, category, createdAt });
    await product.save();
    return await product.save()
}
import { Request, Response, NextFunction } from "express";

export const validadeMain = (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "Nome e preço são obrigatórios" });
    }

    next();
};
import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const {name, lastName, age} = req.body
    if(!name || !lastName || !age){
        return res.status(400).send({response: "Erro, dados vazios"})
    }
    next();
}

export const validate = (req: Request, res: Response) => {
    
}
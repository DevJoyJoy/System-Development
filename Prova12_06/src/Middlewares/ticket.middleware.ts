import { Request, Response, NextFunction } from "express"

export const validateCreate = (req: Request, res: Response, next: NextFunction)=>{
    const {title, description, sector, priority} = req.body;

    if (title || !description || !sector || !priority) {
        return res.status(400).json({error: "Setores obrigatórios estão vazios!"})
    } else if (sector != "TI" || sector != "RH" || sector != "PRODUCAO" || sector != "LOGISTICA"){
        return res.status(400).json({error: "Setor inválido!"})
    } else if (priority != "ALTA" || priority != "MEDIA" || priority != "BAIXA"){
        return res.status(400).json({error: "Prioridade inválida!"})
    }

    next();
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction)=>{
    const {title, description, sector, priority, status} = req.body;

    if (title || !description || !sector || !priority) {
        return res.status(400).json({error: "Setores obrigatórios estão vazios!"})
    } else if (sector != "TI" || sector != "RH" || sector != "PRODUCAO" || sector != "LOGISTICA"){
        return res.status(400).json({error: "Setor inválido!"})
    } else if (priority != "ALTA" || priority != "MEDIA" || priority != "BAIXA"){
        return res.status(400).json({error: "Prioridade inválida!"})
    } else if (status == "FINALIZADO") {
        return res.status(403).json({error: "Não é possível editar tickets concluídos!"})
    }

    next(); 
}

export const validateDelete = (req: Request, res: Response, next: NextFunction)=>{
    const {status} = req.body;

    if (status == "FINALIZADO") {
        return res.status(403).json({error: "Não é possível editar tickets concluídos!"})
    }
}
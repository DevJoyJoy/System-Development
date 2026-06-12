import { Request, Response } from "express";
import Person from '../models/person.ts';

class PersonController {
    static async getUsers(req: Request, res: Response){
        try {
            const people = await Person.find();
            res.status(200).json(people);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pessoas', error });
        }
    }
    
    static async postUser(req: Request, res: Response){
        const { name, lastName, age } = req.body;
        try {
            const person = new Person({ name, lastName, age });
            await person.save();
            res.status(201).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar pessoa', error });
        }
    }

    static async putUser(req: Request, res: Response){
        const { id } = req.params;
        const { name, age } = req.body;
        
        try {
            const person = await Person.findByIdAndUpdate(id, { name, age }, { new: true });
            if (!person) {
                res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            res.status(200).json(person);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao atualizar pessoa', error });
        }
    }

    static async deleteUser(req: Request, res: Response){
        const { id } = req.params;
        
        try {
            const person = await Person.findByIdAndDelete(id);
            if (!person) {
                res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            res.status(400).json({ message: 'Erro ao deletar pessoa', error });
        }
    }
}

export default PersonController;
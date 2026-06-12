import express, { Request, Response, Router } from 'express';

interface users {
    id: number,
    name: string,
    email: string,
    func: string,
    active: boolean,
    createdAt: string
}

const router: Router = express.Router();
const user: users[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const { name, email, active, func} = req.body
        const createdAt = new Date().toISOString();
        const id = user.length + 1;
        const emailFind = user.find(u => u.email == email)

        if (emailFind){
            res.status(404).send( {response : `Email already in use!`})
        }

        user.push({id, name, email, func, active, createdAt})
        res.status(200).send({message: "User " + name + " registered! ID: " + id})
    })
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({ users : user})
    })
    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertId = Number(id)
        const userFind = user.find(u => u.id === convertId)
        if (!userFind){
            res.status(404).send( {response : `User not found!`})
        }

        res.status(200).send({ users : userFind})
    })
    .put('/update/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const {name, email, func, active} = req.body
        const convertId = Number(id);
        const userFind = user.find(u => u.id == convertId)
        const emailFind = user.find(u => u.email == email)
        if (!userFind){
            res.status(404).send( {response : `User not found!`})
        }

        if (emailFind){
            res.status(404).send( {response : `Email already in use!`})
        }

        res.status(200).send( {response : ` Updating user: ${id} -> ${name}`})
    })
    .patch('updateP/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const {name, email, func, active} = req.body
        const convertId = Number(id);
        const userFind = user.find(u => u.id == convertId)
        const emailFind = user.find(u => u.email == email)
        if (!userFind){
            res.status(404).send( {response : `User not found!`})
        }

        if (emailFind){
            res.status(404).send( {response : `Email already in use!`})
        }

        res.status(200).send( {response : ` Updating user: ${id} -> ${name}`})
    })
    .delete('/delete/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { name } = req.body
        const convertId = Number(id);

        const userFind = user.find(u => u.id == convertId)
        if (!userFind){
            res.status(404).send( {response : `User not found!`})
        }
        res.status(200).send( {response : ` Deleting user: ${id} -> ${name}`})
    })

export default router;
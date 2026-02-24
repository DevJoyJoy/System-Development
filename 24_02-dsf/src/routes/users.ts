import express, { Request, Response, Router } from 'express';

interface users {
    id: Int16Array,
    name: string,
    email: string,
    func: string,
    active: boolean,
    createdAt: Date
}

const router: Router = express.Router();
const user: users[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const {id, name, email, active, createdAt, func} = req.body
        user.push({id, name, email, func, active, createdAt})
        res.status(200).send({message: "User " + name + " cadatrado! ID: " + id})
    })
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({ users : user})
    })
    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertId = Number(id)
        res.status(200).send({ users : user[convertId]})
    })

export default router;
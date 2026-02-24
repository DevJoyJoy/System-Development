import express, { Request, Response, Router } from 'express';

interface users {
    id: Int16Array,
    name: string,
    email: string,
    function: string,
    active: boolean,
    createdAt: Date
}

const router: Router = express.Router();
const user: users[] = [];

router
    .post('/register', (req: Request, res: Response) => {
        const {id, name, lastName} = req.body
        user.push({id, name, email, function, active, createdAt})
        res.status(200).send({message: "User " + name + " " + lastName + " cadatrado! ID: " + id})
    })

export default router;
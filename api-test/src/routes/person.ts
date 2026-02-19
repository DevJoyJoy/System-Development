import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/register', (req: Request, res: Response) => {
    const {id, name, lastName} = req.body
    people.push({id, name, lastName})
    res.status(200).send({message: "User " + name + " " + lastName + " cadatrado! ID: " + id})
})
    .get('/users', (req: Request, res: Response) => {
        res.status(200).send({ users : people})
})
    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
        res.status(200).send({ response : people[convertedId]})
})
    .get('/filtro', (req: Request, res: Response) => {
        const { name, lastName } = req.query
        res.status(200).send( {response : `${name} ${lastName}`})

})
    .put('/atualizar/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const {name, lastName} = req.body
        res.status(200).send( {response : ` Atualizando usuário: ${id} -> ${name} ${lastName}`})
})
    .delete('/deletar/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const {name, lastName} = req.body
        res.status(200).send( {response : ` Deletando usuário: ${id} -> ${name} ${lastName}`})
})
export default router;
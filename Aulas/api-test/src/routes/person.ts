import express, { Request, Response, Router } from 'express';
import Person from '../models/person.ts';
import PersonController from '../controllers/personController.ts'
import { validateRegister } from '../middlewares/personMiddleware.ts';

const router: Router = express.Router();

router
    .post('/register', validateRegister, PersonController.postUser)
    .get('/people', PersonController.getUsers)
    .put('/person/:id', PersonController.putUser)
    .delete('/person/:id', PersonController.deleteUser);
export default router;
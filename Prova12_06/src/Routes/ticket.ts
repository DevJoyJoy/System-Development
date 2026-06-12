import TicketController from "../Controllers/TicketController.js"
import express from 'express';
import { validateCreate, validateDelete, validateUpdate } from "../Middlewares/ticket.middleware.js";

const route = express.Router();

route
    .post('/create', validateCreate, TicketController.create)
    .get('/show', TicketController.show)
    .get('/show/:id', TicketController.showById)
    .put('/update/:id', validateUpdate, TicketController.update)
    .delete('/delete/:id', validateDelete, TicketController.delete)

route.patch('/start/:id', TicketController.start)
route.patch('/finish/:id', TicketController.finish)
route.get('/show/sector/:sector', TicketController.showBySector)
route.get('/show/status/:status', TicketController.showByStatus)
route.get('/show/priority/:priority', TicketController.showByPriority)

export default route
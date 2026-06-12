import { Request, Response } from "express";
import { stringify } from "querystring";
import { alterTicketDTO, registerTicketDTO } from "../DTOs/ticketDTO.js";
import { createTicket, showTicketById, showTickets, updateTicket, deleteTicket, startTicket, finishTicket, showTicketBySector, showTicketByStatus, showTicketByPriority } from "../Services/ticket.service.js";

export default class TicketController {
    static async create(req: Request, res: Response){
        const data: registerTicketDTO = req.body
        try {
            await createTicket(data)
            return res.status(200).send({response: "Ticket criado com sucesso!"})
        } catch {
            return res.status(500).send({response: "Erro de sevidor..."})
        }
    }
    
    static async show(req: Request, res: Response){
        try{
            await showTickets()
            return res.status(200).send({response: "Tickets encontrados!"})
        } catch {
            return res.status(400).send({response: "Tickets não encontrados..."})
        }
    }

    static async showById(req: Request, res: Response){
        const {id} = req.params
        try {
            await showTicketById(Number(id))
            return res.status(200).send({response: "Ticket encontrado!"})
        } catch {
            return res.status(400).send({response: "Ticket não encontrado..."})
        }
    }

    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: alterTicketDTO = req.body
        try {
            await updateTicket(Number(id), data)
            return res.status(200).send({response: "Ticket atualizado com sucesso!"})
        } catch {
            return res.status(400).send({response: "Não foi possível atualizar o ticket..."})
        }
    }

    static async delete(req: Request, res: Response){
        const {id} = req.params
        try {
            await deleteTicket(Number(id))
            return res.status(200).send({response: "Ticket deletado com sucesso!"})
        } catch {
            return res.status(400).send({response: "Não foi possível deletar..."})
        }
    }

    static async start(req: Request, res: Response){
        const {id} = req.params
        try {
            await startTicket(Number(id))
            return res.status(200).send({response: "Ticket iniciado com sucesso!"})
        } catch {
            return res.status(400).send({response: "Não foi possível iniciar..."})
        }
    }

    static async finish(req: Request, res: Response){
        const {id} = req.params
        try {
            await finishTicket(Number(id))
            return res.status(200).send({response: "Ticket finalizado com sucesso!"})
        } catch {
            return res.status(400).send({response: "Não foi possível finalizar..."})
        }
    }
    //EXTRAS
    static async showBySector(req: Request, res: Response){
        const {id: sector} = req.params
        try {
            await showTicketBySector(String(sector))
            return res.status(200).send({response: "Tickets encontrados!"})
        } catch {
            return res.status(400).send({response: "Ticket não encontrados..."})
        }
    }
    static async showByStatus(req: Request, res: Response){
        const {status} = req.params
        try {
            await showTicketByStatus(String(status))
            return res.status(200).send({response: "Tickets encontrados!"})
        } catch {
            return res.status(400).send({response: "Tickets não encontrados..."})
        }
    }
    static async showByPriority(req: Request, res: Response){
        const {priority} = req.params
        try {
            await showTicketByPriority(String(priority))
            return res.status(200).send({response: "Tickets encontrados!"})
        } catch {
            return res.status(400).send({response: "Tickets não encontrados..."})
        }
    }
    
}
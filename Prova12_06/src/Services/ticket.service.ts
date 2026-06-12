import { registerTicketDTO, alterTicketDTO, startTicketDTO, finishTicketDTO } from '../DTOs/ticketDTO.js'
import { prisma } from '../lib/prisma.js'

export const createTicket = async(data: registerTicketDTO)=>{
    const {title, description, sector, priority} = data
    await prisma.ticket.create({
        data: {title, description, sector, priority}
    })
}

export const showTickets = async()=>{
    await prisma.ticket.findMany({})
}

export const showTicketById = async(id: number)=>{
    await prisma.ticket.findUnique({
        where: {id}
    })
}

export const updateTicket = async(id: number, data: alterTicketDTO)=>{
    const {title, description, priority, sector} = data
    await prisma.ticket.update({
        where: {id},
        data: {title, description, priority, sector}
    })
}

export const deleteTicket = async(id: number)=>{
    await prisma.ticket.delete({
        where: {id}
    })
}

export const startTicket = async(id: number)=>{
    const status = "EM_ANDAMENTO"
    await prisma.ticket.update({
        where: {id},
        data: {status}
    })
}

export const finishTicket = async(id: number)=>{
    const status = "EM_ANDAMENTO"
    const date = new Date()
    await prisma.ticket.update({
        where: {id},
        data: {status, date}
    })
}

//EXTRAS
export const showTicketBySector = async(sector: string)=>{
    await prisma.ticket.findMany({
        where: {sector}
    })
}
export const showTicketByStatus = async(status: string)=>{
    await prisma.ticket.findMany({
        where: {status}
    })
}

export const showTicketByPriority = async(priority: string)=>{
    await prisma.ticket.findMany({
        where: {priority}
    })
}

export interface registerTicketDTO {
    title: string
    description: string
    sector: string
    priority: string
    createdAt: Date
}

export interface alterTicketDTO {
    title: string
    description: string
    sector: string
    priority: string
}

export interface startTicketDTO {
    status: string
}

export interface finishTicketDTO {
    status: string
    finishedAt: Date
}
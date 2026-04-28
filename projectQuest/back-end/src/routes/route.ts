import { Express } from 'express';
import express from 'express'
import project from './project.ts'
import mission from './mission.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/project', project)
        .use('/api/mission', mission)
}
import { Express } from 'express';
import express from 'express'
import product from './productRoutes.ts'
import auth from './auth.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/products', product)
        .use('/api/auth', auth)
}
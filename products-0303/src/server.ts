import express from 'express';
import connectDB from './database/database.ts';

const app = express();
const port = 8080;

connectDB();
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
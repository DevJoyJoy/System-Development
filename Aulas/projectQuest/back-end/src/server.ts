import express from 'express';
import connectDB from './database/database';

const app = express();
const port = 8080;

connectDB();
initRoutes(app);
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
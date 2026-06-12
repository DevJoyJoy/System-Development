import express from 'express';
import routes from './routes/route.ts'
import connectDB from './database/database.ts';
import cors from 'cors'

const app = express();
const port = 8080;


app.use(cors({
    origin: '*'
}))
connectDB();
routes(app)
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
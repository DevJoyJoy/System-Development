import express from 'express';
import connectDB from './database/database.ts';
import routes from './routes/route.ts';
import cors from 'cors';
const app = express();
const port = 8080;

connectDB();

app.use(cors({
    origin: 'http://localhost:5173'  //o cors precisa ficar antes do routes para as rotas serem declaradas com a configuração dele!! :)

}))

routes(app)



app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
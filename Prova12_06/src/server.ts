import express from 'express'
import route from '../src/Routes/route.js'
import cors from 'cors'
import 'dotenv/config'

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}))

route(app)

app.get('/', (req, res) => {
    res.status(200).send({response : "Sucesso ao Carregar a pagina"})
})

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));
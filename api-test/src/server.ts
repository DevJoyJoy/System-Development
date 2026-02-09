import express from 'express'
import routes from './routes/route.ts'


const port = 8080;
const app = express()
const pessoa = {
    name: "Fehfita",
    lastName: "Fialho"
}

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando!"})
})
// app.get('/', (req, res) => {
//     res.send({pessoa})
// })

// app.get('/', (req, res) => {
//     res.send({pessoa: pessoa})
// })

app.listen(port, () => {
    console.log("Servidor rodando na porta ", {port})
})
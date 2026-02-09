import express from 'express'

const port = 8080;
const app = express()
const pessoa = {
    name: "Fehfita",
    lastName: "Fialho"
}

// app.get('/', (req, res) => {
//     res.send({pessoa})
// })

app.get('/', (req, res) => {
    res.send({pessoa: pessoa})
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", {port})
})
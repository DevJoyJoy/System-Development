
const people = [{
    nome: "Queila",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Don",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Trevis",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Nicolas",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Fernanda",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Stati",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Nycollas",
    sobrenome: "Bosch",
    salario: 10000
}, 
{
    nome: "Kessy",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Thayna",
    sobrenome: "Bosch",
    salario: 10000
},
{
    nome: "Fernanda",
    sobrenome: "Bosch",
    salario: 10000
}]

db.people.insertMany(people)

use('bosch')
db.people.find({ nome: /^D.*n$/ })
db.people.find({ nome: /l/ })

use('bosch')
db.people.find({ $and: [{nome: 'Queila' }, {sobrenome: 'Bosch'}]})
db.people.find({salario: { $gt: 1000}})
db.people.find({salario: { $gte: 1000}}, {nome: 1, sobrenome: 1})

use('bosch')
db.people.updateOne(
    {_id: ObjectId('6981f4d4795733d999212501') },
    {$set: {nome: "NovoNome"}}
)

use('bosch')
db.people.updateMany(
    { salario: 10000},
    {$set: {salario: 12000}}
)

use('bosch')
db.people.deleteMany({nome: /^D/})
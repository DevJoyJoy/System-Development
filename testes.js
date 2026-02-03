
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
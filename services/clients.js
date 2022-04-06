const express = require('express')

const app = new express()
const faker = require('faker')

app.use(express())

app.get('/:cpf', (req, res) => {
    const { cpf } = req.params

    res.status(200).json({
        cpf,
        clientName: faker.name.findName(),
        dataDeNascimento: faker.date.past()
    })
})

app.listen(8082, () => console.log('Api rodando'))
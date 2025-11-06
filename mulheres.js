const express = require('express')
const router = express.Router()
const cors = require('cors') //permite usar a api no frontend

//LIGANDO AO ARQUIVO BANCO DE DADOS
const conectaBancoDeDados = require('./bancoDeDados')
//CHHAMANDO A FUNÇÃO QUE CONECTA ELE
conectaBancoDeDados()

const Mulher = require('./mulherModel')
const app = express()
app.use(express.json())
app.use(cors())

const porta = 3333

// GET
async function mostraMulheres(resquest, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
}
    catch(erro) {
        console.log(erro)

}
}

// POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }

    catch(erro) {
        console.log(erro)
    }
}

// PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
         if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

        if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

        if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }
        if (request.body.citacao) {
        mulherEncontrada.citacao = request.body.citacao
    }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
}
    catch(erro) {
        console.log(erro)
    }

}

// DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        responde.json({ messagem: 'Mulher deletada com sucesso!'})
    }

    catch(erro) {
        console.log(erro)
    }
}


app.get('/mulheres', mostraMulheres)
app.post('/mulheres', criaMulher)
app.patch('/mulheres/:id', corrigeMulher)
app.delete('/mulheres/:id', deletaMulher)


function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)

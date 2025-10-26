const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Cali',
        imagem: 'https://i.pinimg.com/736x/c7/7a/cd/c77acdebf64f930274be313b413d725e.jpg',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Teste1',
        imagem: 'https://i.pinimg.com/736x/c7/7a/cd/c77acdebf64f930274be313b413d725e.jpg',
        minibio: 'Teste1'
    },
     {
        nome: 'Teste2',
        imagem: 'https://i.pinimg.com/736x/c7/7a/cd/c77acdebf64f930274be313b413d725e.jpg',
        minibio: 'Teste2'
    },
     {
        nome: 'Teste3',
        imagem: 'https://i.pinimg.com/736x/c7/7a/cd/c77acdebf64f930274be313b413d725e.jpg',
        minibio: 'Teste3'
    }
]

function mostraMulheres(resquest, response) {
    response.json(mulheres)
    
}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)

// require pede o uso da biblioteca

const express = require('express')
const router = express.Router()

// constante = variavel do python
// constante tem que começar com $ ou _ ?
// const informa que a palavra seguinte vai ser uma constante (porta, nesse caso)
// não pode ser nenhuma palavra reservada do js, tem uma listinha
// padrão js camelCase: variavelAssim

const app = express()
const porta = 3333

// function = def do python, bloco de código que faz alguma coisa

function mostraMulher(request, response) {
    response.json({
        nome: 'Cali',
        imagem: 'https://i.pinimg.com/736x/c7/7a/cd/c77acdebf64f930274be313b413d725e.jpg',
        minibio: 'Desenvolvedora'
    })
}


function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)

// json = forma de enviar pela internet varias informações
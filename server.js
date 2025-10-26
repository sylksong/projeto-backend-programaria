// require pede o uso da biblioteca

const express = require('express')

// constante = variavel do python
// constante tem que começar com $ ou _ ?
// const informa que a palavra seguinte vai ser uma constante (porta, nesse caso)
// não pode ser nenhuma palavra reservada do js, tem uma listinha
// padrão js camelCase: variavelAssim

const app = express()
const porta = 3333

// function = def do python, bloco de código que faz alguma coisa

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.listen(porta, mostraPorta)

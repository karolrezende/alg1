const livros = require('./lista')
const menorvalor = require ('./ordenacao')

for (let atual = 0; atual = livros.length; atual++){
    let menor = menorvalor(livros, atual)

    let livroat = livros[atual]
    let livromenor = livros[menor]

    livros[atual] = livroat
    livros[menor] = livromenor
}

console.log(livros)
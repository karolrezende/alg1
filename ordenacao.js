//codigo para imprimir o preço do menor livro

const livroarray = require('./lista') //ira impportar o arquivo de listas.

function menorvalor(livro, posicao){
    let barato = posicao;
    for (let atual = posicao; atual < livro.length; atual++){
            if ( livro[atual].preco < livro[barato].preco) {
                barato = atual
            }
    }
    return barato
}
module.exports = menorvalor;
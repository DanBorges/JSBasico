const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(e => e * 2)

console.log(resultado)

const soma10= e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

obj = JSON.parse(carrinho)
console.log(obj)
// const precos = carrinho.map(e => e.JSON.parse(carrinho).map(e => e.preco))
// console.log(precos)

// const paraObjeto = json => JSON.parse(json)
// const apenasPreco = produto => produto.preco

// const resultado2 = carrinho.map(ParaObjeto).map(apenasPreco)
// console.log(resultado2)
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(() => false))

const ehCaro = p => p.preco >=500
const ehFrafil = p => p.fragil
const resultado = produtos.filter(ehCaro).filter(ehFrafil)

console.log(resultado)
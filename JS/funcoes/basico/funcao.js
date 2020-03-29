const imprimirSoma = function(a, b) {
    console.log(a+b)
}
imprimirSoma(2, 3)

const soma = (a,b) => {
    return a+b
}
console.log(soma(4,7))

const subtracao = (a,b) => a-b
console.log(subtracao(8,5))

const imprimir = a => console.log(a)
imprimir('LEGALLL')



const resultado = nota => nota >= 7 ? 'Aprovado' :  'Rrprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
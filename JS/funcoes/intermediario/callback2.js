const notas = [7.7, 8.9, 4.5, 9.6, 7.2, 3.4]

// Sem callback
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)






const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2)



const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
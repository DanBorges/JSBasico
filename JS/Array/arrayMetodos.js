const pilotos = ["Vettel", "Alonso", "Raikonen", "Massa"]
pilotos.pop() //massa quebrou o carro
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)


pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)

// Splice pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)


//Slice -> novo array

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //novo array
console.log(algunsPilotos2)
const aprovados = ["Agatha", "Aldo", "Daniel", "Rebeca"]

aprovados.forEach(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) 

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)



Array.prototype.forEach2 = function(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados2 = ["Agatha", "Aldo", "Daniel", "Rebeca"]

aprovados2.forEach2(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})
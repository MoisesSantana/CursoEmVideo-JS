let numeroar = []
for(let i = 0; i< 500; i+= 38) {
    numeroar.push(i)
}

for(let i = 0; i<numeroar.length; i++) {
    console.log(`A posição ${i} tem o valor ${numeroar[i]}`)
}


// Apenas para objetos (array é um objeto)

for(let i in numeroar) {
    console.log(`A posição ${i} tem o valor ${numeroar[i]}`)
}

let posicao = numeroar.indexOf(0)
if(posicao == -1) {
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${posicao}`)
}

const teste = [2,1,1,1,2,2,2,3,0];
console.log(teste.indexOf(1)); // retorna o primeiro o indice do primeiro valor encontrado e não todos

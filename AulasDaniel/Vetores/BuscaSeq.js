const prompt = require("prompt-sync")()
let vetor = ['A', 'B', 'C', 'D', 'E']
let procura = prompt("Qual que procura")
let achou = false
for(let i=0; i< vetor.length; i++){
    if( procura == vetor[i]){
        achou = true // Encontrou
        console.log("Encontrando na posicao " + i)
        break
    }
}
if(!achou){ // n encontrou (! negacao)
    console.log("Não encontrado, retorna -1")
}
const prompt = require('prompt-sync')() //Biblioteca para entrada de dados

let vetor = [] // Declara vetor
let posicao = 0
let valor = Number(prompt("Informe um número: "))
while(valor !=-1){
    vetor[posicao] = valor
    posicao++ // Prepara prox posição de entrada de dados
    valor = Number(prompt("Informe outro número. Digite -1 para encerrar a entrada"))
}
// Entrada de dados
for(let i=0;i<6;i++){
    vetor[i] = Number(prompt("Informe um número: "))
}

// Encontra maior e menor
let menor = vetor [0]
let maior = vetor[0]
for(let i=1;i<vetor.length;i++){
    if(vetor[i] < menor){
        menor = vetor[i]
    }
    if(vetor[i] > maior){
        maior = vetor[i]
    }
}
console.log("O maior valor é: " + maior)
console.log("O menor valor é: " + menor)
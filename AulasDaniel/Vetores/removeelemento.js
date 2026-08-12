const prompt= require('prompt-sync')()
//Declara vetor
let vetor = [6, 4, 10, 12, 18, 5]
// Pede para usuario informar o elemento para remover
let remove = Number(prompt("Informe o elemento para remover"))
for(let i= posicao;i < vetor.length - 1; i++){
    vetor[i] = vetor [i + 1]
}
console.log("Novo vetor ")
for(let i= 0; i < vetor.length-1;i++){ //Vetor diminui de tamanho
    console.log(vetor[i])
}
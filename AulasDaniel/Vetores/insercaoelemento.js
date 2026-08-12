//Declara o vetor
let vetor = [6, 4, 10, 12, 18, 5]

//Pede para usuário informar o novo elemento
let novo = Number(prompt("Informe novo elemento"))
// Pede a posição da inserção
let posicao = Number(prompt("Informe a posição de inserção no vetor do novo elemento"))
for(let i = vetor.length; i> posicao; i--){
    vetor[i]= vetor[i - 1]; // Desloca os elementos à direita
}
vetor[posicao] = novo; // Insere novo elemento no vetor

console.log("Novo vetor: " + vetor)
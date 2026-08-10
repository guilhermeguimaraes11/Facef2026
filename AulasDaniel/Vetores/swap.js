let vetor = [1, 2, 3, 4, 5]
let inicio = 0;
let fim = vetor.length - 1;
while(inicio < fim){
    let temp = vetor[fim];
    vetor[fim] = temp;
    inicio = inicio + 1;
    fim = fim - 1;
}
console.log(vetor)
 const prompt = require("prompt-sync")()
 let soma = 0;
// Declaração de um vetor vazio
   let notas = 0; 
   // Entrada de dados
  for (let i =0; i<5; i++){
    notas[i] = Number(prompt("Informe a Nota: " + i))
}

// Calcula a soma das notas
for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]; 
}
let media = soma / notas.length
console.log("A média das notas é " + media.toFixed(2))
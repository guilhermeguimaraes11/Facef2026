let vetor = [
    {filme: "A Odisseia", ano: 2026, genero:"Ficção"},
    {filme:"Os Vingadores", ano: 2020, genero:"Ficção"},
    {filme:"Home Aranha", ano:2026, genero:"Ficção"},
]
console.log(vetor)
// Altera o vingadores para comédia
vetor[1].genero ="Comédia"
// Altera Home Aranha para Homem-Aranha - Um novo dia
vetor[2].filme = "Homem-Aranha - Um novo dia"
// Diminui o ano do filme Odisseia
vetor[0].ano = vetor[0].ano -1
console.log(vetor)

for(let i=0; i<vetor.length;i++){
    console.log(vetor[i].filme + " Genero: " + vetor[i].genero + " Ano: "+ vetor[i].ano)
}
let soma = 0
for(let i=0; i<vetor.length;i++){
soma = soma + vetor[i].ano 
}
let media = soma / vetor.length
console.log("A média de ano dos filmes é " + media.toFixed(2))

let busca = "A Odisseia"
for(let i=0;i<vetor.length;i++){
    if(vetor[i].filme === "A Odisseia"){
    }
    
}


let cidade = prompt("Informe a cidade").toLowerCase
let vogal = prompt("Informe a vogal procurada")
// Calcula as ocorrências
let qtde = 0
// Percorre a string
for(let i=0; i<cidade.lenght;i++){
if(cidade[i] == vogal){
    qtde++
}
}
if(qtde == 0){
    console.log("Vogal não encontrada no nome da cidade")
}
else{
    console.log("Foram encontradas" + qtde + "ocorrências")
}
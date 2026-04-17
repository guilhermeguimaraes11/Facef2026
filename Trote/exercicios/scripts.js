function churras(){
    let qtdePessoas = Number(document.getElementById("qtdePessoas").value)
    let kgs = (qtdePessoas * 400) / 1000 // transforma gramas em kilos
    document.getElementById("resultadoChurras").innerText = "Total de carne " + kgs + " Kg"
}

function febre() {

    let temperatura = Number(document.getElementById("temperatura").value)

    if(temperatura >= 37.5){

        document.getElementById("resultadoFebril").innerText = "Está com Febre"
    }

    else{
        document.getElementById("resultadoFebril").innerText = "Temperatura normal"
    }
}
function credito(){
let renda = Number(document.getElementById("renda").value)
let idade = Number(document.getElementById("idade").value)

if( renda > 2000 && idade > 18){
    document.getElementById("resultadoCredito").innerText = "Credito aprovado"
}
else{
    document.getElementById("resultadoCredito").innerText = "Credito nao foi aprovado"
}

}
function luta(){
    let peso =  Number(document.getElementById("peso").value)
    let idadeLuta = Number(document.getElementById("idadeLuta").value)

    if(idadeLuta < 18){
        document.getElementById("resultadoLuta").innerText = " Categoria Juvenil  "
    }

    else if(peso < 80){
        document.getElementById("resultadoLuta").innerText = " Categoria Adulto - Subcategoria Leve  "
    }
    else {
        document.getElementById("resultadoLuta").innerText = " Categoria Adulto - Subcategoria Pesado  "
    }
    }

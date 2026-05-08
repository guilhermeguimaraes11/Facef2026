function verificarMedalha(){
    let posicao = Number(document.getElementById("posicao").value)
    //Checar o conteudo da variavel posicao
    let div = document.getElementById("resultadoMedalha")
    switch(posicao){
        case 1: div.innerText = "Medalha de Ouro"
                div.style.color = "gold"
               
                break //não entra nos cases abaixo
        case 2: div.innerText = "Medalha de Prata"
                div.style.color = "silver"
                break //não entra nos cases abaixo

        case 3: div.innerText = "Medalha de Bronze"
                 div.style.color = "brown"
                break //não entra nos cases abaixo
    }


}
//alteração para commit
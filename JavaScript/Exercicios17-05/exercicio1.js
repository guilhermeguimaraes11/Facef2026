function verificarEstacao() {
    let posicao = Number(document.getElementById("posicao").value)
    //Checar o conteudo da variavel posicao
    let div = document.getElementById("resultadoEstacao")
    switch (posicao) {
        case 1: div.innerText = "Janeiro - Verão"
            div.style.color = "orange"
            break //não entra nos cases abaixo
        case 2: div.innerText = "Fevereiro - Verão"
            div.style.color = "orange"
            break //não entra nos cases abaixo
        case 3: div.innerText = "Março - Outono"
            div.style.color = "brown"
            break //não entra nos cases abaixo
        case 4: div.innerText = "Abril - Outono"
            div.style.color = "brown"
            break //não entra nos cases abaixo
        case 5: div.innerText = "Maio - Outono"
            div.style.color = "brown"
            break //não entra nos cases abaixo
        case 6: div.innerText = "Junho - Inverno"
            div.style.color = "blue"
            break //não entra nos cases abaixo
        case 7: div.innerText = "Julho - Inverno"
            div.style.color = "blue"
            break //não entra nos cases abaixo
        case 8: div.innerText = "Agosto - Inverno"
            div.style.color = "blue"
            break //não entra nos cases abaixo
        case 9: div.innerText = "Setembro - Primavera"
            div.style.color = "green"
            break //não entra nos cases abaixo
        case 10: div.innerText = "Outubro - Primavera"
            div.style.color = "green"
            break //não entra nos cases abaixo
        case 11: div.innerText = "Novembro - Primavera"
            div.style.color = "green"
            break //não entra nos cases abaixo
        case 12: div.innerText = "Dezembro - Verão"
            div.style.color = "orange"
            break //não entra nos cases abaixo
            
        default: div.innerText = "Mês inválido"
            div.style.color = "red"


    }


}

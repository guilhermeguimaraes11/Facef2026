function verificarCardapio() {
    let posicao = Number(document.getElementById("prato").value)
    
    //Checar o conteudo da variavel posicao
    let div = document.getElementById("resultadoCardapio")
    switch (posicao) {
        case 1: div.innerText = "Prato 1 - Frango Grelhado - R$ 32,90"
            div.style.color = "green"
            break
        case 2: div.innerText = "Prato 2 - Hambúrguer - R$ 25,90"
            div.style.color = "green"
            break
        case 3: div.innerText = "Prato 3 - Salada - R$ 18,90"
            div.style.color = "green"
            break
        case 4: div.innerText = "Prato 4 - Massa - R$ 22,90"
            div.style.color = "green"
            break
        case 5: div.innerText = "Prato 5 - Frutas - R$ 15,90"
            div.style.color = "green"
            break
        default: div.innerText = "Prato não encontrado - Digite um número entre 1 e 5"
            div.style.color = "red"
    }
}
           

    



function verificarVencedor() {
    let jogador1 = document.getElementById("jogador1").value.toLowerCase()
    let jogador2 = document.getElementById("jogador2").value.toLowerCase()
    let div = document.getElementById("resultadoJogo")
    let combinacao = jogador1 + "-" + jogador2 //Concatenei as variáveis com o operador + para formar a string que será avaliada no switch  
    switch (combinacao) {

        case "pedra-pedra":
        case "papel-papel":
        case "tesoura-tesoura":
            div.innerText = "Empate!"
            div.style.color = "gray"
            break //não entra nos cases abaixo

        case "pedra-tesoura":
        case "papel-pedra":
        case "tesoura-papel":
            div.innerText = "Jogador 1 venceu!"
            div.style.color = "green"
            break //não entra nos cases abaixo

        case "tesoura-pedra":
        case "pedra-papel":
        case "papel-tesoura":
            div.innerText = "Jogador 2 venceu!"
            div.style.color = "blue"
            break //não entra nos cases abaixo

        default: div.innerText = "Valor inválido! Use: pedra, papel ou tesoura"
            div.style.color = "red"
    }
}
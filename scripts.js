const key = "7ac4a80393a76119a8270c68bbb1196d"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".vento").innerHTML = "Vento: " + dados.wind.speed + "km/h"
    document.querySelector(".img").src = 'https://openweathermap.org/img/wn/${dados.weather[0].icon}.png'
                                                 

    const icone = dados.weather[0].icon
    document.querySelector(".img").src = `http://openweathermap.org/img/wn/${icone}.png`
}

async function buscarCidade() {
    const cidade = document.querySelector(".input-cidade").value

    // 1. Primeiro buscamos os dados (fetch)
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(resposta => resposta.json())

    // 2. Só depois de ter os 'dados', enviamos para a tela
    colocarDadosNaTela(dados)
}
let inputAdultos = document.getElementById("adulto");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let carne= (400 * inputAdultos.value)+((400/2) * inputCrianca.value)
    if (inputDuracao.value >= 6){
        carne= (650 * inputAdultos.value)+((650/2) * inputCrianca.value)
    }

    let cerveja= (1200 * inputAdultos.value)
    if (inputDuracao.value >= 6){
        cerveja=(2000 * inputAdultos.value)
    }

    let bebida= (1000 * inputAdultos.value)+((1500/2) * inputCrianca.value)
    if (inputDuracao.value >= 6){
        bebida= (1500 * inputAdultos.value)+((1500/2) * inputCrianca.value)
    }

    console.log(carne , cerveja , bebida);
    
    resultado.innerHTML = `<h3>Resultado:</h3> <p>${carne}g de Carne</p>`;
    resultado.innerHTML += `<p>${cerveja}ml de Cerveja</p>`;
    resultado.innerHTML += `<p>${bebida}ml de Refrigerante</p>`;
}


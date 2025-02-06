function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    document.getElementById("resultadoSoma").innerText = `SOMA: ${SOMA}`;
}

function verificarFibonacci() {
    let num = parseInt(document.getElementById("numFibonacci").value);
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    let resultado = (b === num || num === 0) ? "pertence" : "não pertence";
    document.getElementById("resultadoFibonacci").innerText = `O número ${num} ${resultado} à sequência de Fibonacci.`;
}

function analisarFaturamento() {
    let faturamento = [100, 200, 0, 150, 300, 0, 50, 400]; // Exemplo de dados
    let valoresValidos = faturamento.filter(valor => valor > 0);
    let menor = Math.min(...valoresValidos);
    let maior = Math.max(...valoresValidos);
    let media = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;
    let acimaMedia = valoresValidos.filter(valor => valor > media).length;
    document.getElementById("resultadoFaturamento").innerText = `Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${acimaMedia}`;
}

function calcularPercentual() {
    let estados = {"SP": 67836.43, "RJ": 36678.66, "MG": 29229.88, "ES": 27165.48, "Outros": 19849.53};
    let total = Object.values(estados).reduce((a, b) => a + b, 0);
    let resultado = Object.entries(estados).map(([estado, valor]) => `${estado}: ${(valor / total * 100).toFixed(2)}%`).join(" | ");
    document.getElementById("resultadoPercentual").innerText = resultado;
}

function inverterString() {
    let str = document.getElementById("stringInput").value;
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    document.getElementById("resultadoString").innerText = `Invertida: ${invertida}`;
}

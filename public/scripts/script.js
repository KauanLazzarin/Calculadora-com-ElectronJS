// Pegar elementos da DOM
const numeros = document.querySelectorAll('#number')
const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const dividir = document.querySelector('#dividir')
const multiplicar = document.querySelector('#multiplicar')
const display = document.querySelector('#display')
const resultado = document.querySelector('#resultado')
const botaoLimpar = document.querySelector('#limpar')


// Array para armazenar os números digitados
let valores = []

// Resultado final padrão 0
let resultadoFinal = 0

// Variável que guardará o valor do sinal
let sinal

// Para cada numero apertado, adicionar ao display
numeros.forEach(numero => {
    numero.onclick = () => {
        display.value += numero.textContent
    }
})

/* 
    Ao apertar qualquer das teclas de operação,
    o número anterior será adicioinado ao array
    e o display resetará
*/

// Botão somar
const operarSoma = somar.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Somar'
}

//Botão subtrair
const operarSubtracao = subtrair.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Subtrair'
}

// Botão dividir
const operarDivisao = dividir.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Dividir'
}

// Botão multiplicar
const operarMultiplicacao = multiplicar.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Multiplicar'
}

/*
    Ao apertar o botão de igual, o valor atual
    do display é adicionado ao array e a função
    que calcula é chamada.
*/
const getResultado = resultado.onclick = () => {
    valores.push(parseInt(display.value))
    console.log(valores)

    if (sinal == 'Somar') {
        calcular(valores[0], valores[1], '+')
    } else

        if (sinal == 'Subtrair') {
            calcular(valores[0], valores[1], '-')
        } else

            if (sinal == 'Multiplicar') {
                calcular(valores[0], valores[1], '*')
            } else

                if (sinal == 'Dividir') {
                    calcular(valores[0], valores[1], '/')
                }

    valores = []

    setTimeout(() => {
        display.value = null    
    }, 10000);
}

// Botão AC para resetar o display e as variáveis do array
botaoLimpar.onclick = () => {
    valores = []
    display.value = null
}


/*
    Função de cálculo, recebe dois valores e 
    então troca o valor do display para o selecionado
*/
function calcular(valor1, valor2, operador) {
    switch (operador) {
        case '+':
            resultadoFinal = valor1 + valor2
            break
        case '-':
            resultadoFinal = valor1 - valor2
            break
        case '*':
            resultadoFinal = valor1 * valor2
            break
        case '/':
            resultadoFinal = valor1 / valor2
            break
    }

    if (resultadoFinal == Infinity || isNaN(resultadoFinal) === true) {
       display.value = null
    } else {
        display.value = (resultadoFinal)
    }

}

window.addEventListener('keydown', (event) => {
    if (event.key == '+') {
        operarSoma()
    } else if (event.key == '-') {
        operarSubtracao()
    } else if (event.key == '/') {
        operarDivisao()
    } else if (event.key == '*') {
        operarMultiplicacao()
    } else if (event.key == '=') {
        getResultado()
    }
})

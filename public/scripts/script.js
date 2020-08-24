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
somar.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Somar'
    console.log(sinal)
}

//Botão subtrair
subtrair.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Subtrair'
    console.log(sinal)
}

// Botão dividir
dividir.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Dividir'
    console.log(sinal)
}

// Botão multiplicar
multiplicar.onclick = () => {
    valores.push(parseInt(display.value))
    display.value = null
    sinal = 'Multiplicar'
    console.log(sinal)
}

/*
    Ao apertar o botão de igual, o valor atual
    do display é adicionado ao array e a função
    que calcula é chamada.
*/
resultado.onclick = () => {
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

    if (resultadoFinal == Infinity) {
        display.value = parseInt(valor1)
    } else {
        display.value = (resultadoFinal)
    }

    if (isNaN(resultadoFinal) === true) {
        display.value = 'Operação inválida'
    }

}

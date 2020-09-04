const form = document.querySelector('#formulario')
const input = document.querySelector('#measure-input')
const display = document.querySelector('#result-display')
const firstMeasure = document.querySelector('#first-measure')
const secondMeasure = document.querySelector('#second-measure')
const button = document.querySelector('#result-button')
let measureOne = firstMeasure.value
let measureTwo = secondMeasure.value
let result

firstMeasure.onchange = () => {
    measureOne = firstMeasure.value
}

secondMeasure.onchange = () => {
    measureTwo = secondMeasure.value
}

function getConvertionResult (value) {
    if (measureOne == 'metro' && measureTwo == 'centimetro') {
        result = value * 100
        display.value = result
    } else {
        display.value = 111
    }
}

input.onchange = () => {
    console.log('cheguei aqui')
    getConvertionResult(parseInt(input.value))
}


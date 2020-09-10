// Declaração de variaveis para uso posterior
let firstTemperatureMeasure
let secondTemperatureMeasure
let firstInputValue

// Coleta de elementos da dom
const firstMeasureSelect = document.querySelector('#first-measure-select')
const secondMeasureSelect = document.querySelector('#second-measure-select')
const firstInput = document.querySelector('#first-measure-input')
const secondInput = document.querySelector('#second-measure-input')

/*
    Event Listeners para atualizar o valor
    da operação e do valor que será convertido a cada atualização
    dos inputs
*/

firstMeasureSelect.onchange = () => {
    firstTemperatureMeasure = firstMeasureSelect.value
    console.log(firstTemperatureMeasure)
}

secondMeasureSelect.onchange = () => {
    secondTemperatureMeasure = secondMeasureSelect.value
    console.log(secondTemperatureMeasure)
}

firstInput.onchange = () => {
    firstInputValue = firstInput.value
    convertTemperatureValue(firstInputValue)
}

// Função que faz os calculos
    
function convertTemperatureValue (value) {
    if (firstTemperatureMeasure == 'celsius' && secondTemperatureMeasure == 'kelvin') {
        secondInput.value = (parseInt(value) + 273.15)
    } else if (firstTemperatureMeasure == 'celsius' && secondTemperatureMeasure == 'fahren') {
        secondInput.value = (value * (9 / 5)) + 32
    }

    if (firstTemperatureMeasure == 'kelvin' && secondTemperatureMeasure == 'celsius') {
        secondInput.value = (value - 273.15).toFixed(2)
    } else if (firstTemperatureMeasure == 'kelvin' && secondTemperatureMeasure == 'fahren') {
        secondInput.value = ((value - 273.15) * 9/5 + 32).toFixed(2)
    }

    if (firstTemperatureMeasure == 'fahren' && secondTemperatureMeasure == 'celsius') {
        secondInput.value = ((value - 32) * 5 / 9).toFixed(2)
    } else if (firstTemperatureMeasure == 'fahren' && secondTemperatureMeasure == 'kelvin') {
        secondInput.value = ((value - 32) * (5/9)+ 273.15).toFixed(3)
    }
}

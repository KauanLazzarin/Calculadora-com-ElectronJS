const form = document.querySelector('#formulario')
const input = document.querySelector('#measure-input')
const display = document.querySelector('#result-display')
const firstMeasure = document.querySelector('#first-measure')
const secondMeasure = document.querySelector('#second-measure')
let measureOne 
let measureTwo 

firstMeasure.onchange = () => {
    measureOne = firstMeasure.value
}

secondMeasure.onchange = () => {
    measureTwo = secondMeasure.value
}

input.onchange = (medida1, medida2) => {

}
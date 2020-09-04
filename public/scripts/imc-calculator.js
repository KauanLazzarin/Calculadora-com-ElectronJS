const weightValue = document.querySelector('#weigth')
const heightValue = document.querySelector('#user-heigth')
const button = document.querySelector('#calc-button')
const display = document.querySelector('#display')
const imcLevel = document.querySelector('#imc-level')

button.onclick = () => {
    let imcValue
    imcValue = (weightValue.value / ((heightValue.value / 100) ** 2)).toFixed(2)
    display.value = imcValue

    if (imcValue < 18.5) {
        imcLevel.innerText = 'O seu IMC está baixíssimo, nível de magreza alto'
    } else if (imcValue > 18.5 && imcValue < 24.9) {
        imcLevel.innerText = 'O seu IMC está normal'
    } else if (imcValue > 25.0 && imcValue < 29.9 ) {
        imcLevel.innerText = 'O seu IMC está um pouco elevado, nível de Obesidade: I'
    } else if (imcValue > 30.0 && imcValue < 39.9) {
        imcLevel.innerText = 'O seu IMC está elevado, nível de Obesidade: II'
    } else if (imcValue > 40.0) {
        imcLevel.innerText = 'O seu IMC está altíssimo, nível de Obesidade mórbida'
    }
}


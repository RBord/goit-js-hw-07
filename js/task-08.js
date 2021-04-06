const inputEl = document.querySelector('input')

const btnEl = document.querySelectorAll('[data-action="render"]')

const divBoxes = document.querySelector('#boxes')

inputEl.addEventListener('input', onInputValue)

function onInputValue () {
    return inputEl.value;
}

function createBoxes(amount) {
    const divEl = document.createElement('div')
    divBoxes.append(divEl);
}

btnEl.addEventListener('click', createBoxes())
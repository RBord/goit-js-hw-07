
const inputEl = document.querySelector('input')
const btnRender = document.querySelector('[data-action="render"]')
const divBoxes = document.querySelector('#boxes')

inputEl.addEventListener('input', onInputValue)

function createBoxes(amount) {
    const divEl = document.createElement('div')
    divBoxes.append(divEl);
}

btnEl.addEventListener('click', createBoxes())
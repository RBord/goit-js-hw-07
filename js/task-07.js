const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '16px';
const fontSize = parseInt(textEl.style.fontSize, 10);


function onInputChange (event) {
    console.log('Инпут изменился!!!')
    let newFontSize = ((inputEl.value / 100)*2) * fontSize;
    return textEl.style.fontSize = `${newFontSize}px`;
}

inputEl.addEventListener('change', onInputChange)
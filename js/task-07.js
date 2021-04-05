const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '16px';

function toScale(x, base ) {
    const parsed = parseInt(x, base);
    return parsed;
}
console.log(toScale(textEl.style.fontSize, 10));


function onInputChange (event) {

}

inputEl.addEventListener('change', onInputChange)
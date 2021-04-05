const inputEl = document.querySelector('#validation-input');
console.log(inputEl.dataset.length);
inputEl.style.border = '3px solid #bdbdbd';

function onInputBlur () {
    const validColor = '#4caf50';
    const invalidColor = '#f44336';
    // if (inputEl.value.length === Number(inputEl.dataset.length)){
    //     inputEl.style.borderColor = validColor;
    // } else { inputEl.style.borderColor = invalidColor;}
    inputEl.value.length === Number(inputEl.dataset.length) ? inputEl.style.borderColor = validColor : inputEl.style.borderColor = invalidColor;
}

inputEl.addEventListener('blur', onInputBlur );
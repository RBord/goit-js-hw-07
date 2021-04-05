
let counterValue = document.querySelector('#value');
const ValuesBtn = document.querySelectorAll('[data-action]');


function increment () {
    counterValue.textContent ++;
}

function decrement () {
    counterValue.textContent --;
}

ValuesBtn[0].addEventListener('click', decrement );
ValuesBtn[1].addEventListener('click', increment);


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulEl = document.querySelector('#ingredients');


const listItems = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li
})

ulEl.append(...listItems);
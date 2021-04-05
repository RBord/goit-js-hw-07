const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulEl = document.querySelector('#ingredients');

// const createItems = arr => {
//     return arr.map(el => {
//       let liEl = document.createElement('li');
//       liEl.textContent = el;
//       return liEl;
//     });
//   };
  
//   const ingredientsList = createItems(ingredients);
  
//   ulEl.append(...ingredientsList);

ingredients.forEach((ingredient) => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    ulEl.append(liEl);
});
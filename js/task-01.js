const ulEl = document.querySelector('#categories');

const itemEl = ulEl.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории`)

const takeDescr = arrayRefs => {
    arrayRefs.forEach(el =>
      console.log(
        `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`,
      ),
    );
  };
  
takeDescr(itemEl);






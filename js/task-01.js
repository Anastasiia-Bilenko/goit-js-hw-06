const categoriesEl = document.querySelector('#categories');
const itemEl = categoriesEl.querySelectorAll('.item');
// console.log(itemEl);
const itemLength = `Number of categories:${itemEl.length}`;
console.log(itemLength)
itemEl.forEach((item) => {
    let itemHeaderEl = item.querySelector('h2')
    let itemCategoryLength = item.querySelector('ul')
    console.log(`Category : ${itemHeaderEl.textContent}`)
    console.log(`Elrments: ${itemCategoryLength.childElementCount}`)
})








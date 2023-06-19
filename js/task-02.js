const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i+=1) {
  const newEl = document.createElement('li');
  newEl.textContent = ingredients[i];
newEl.classList.add("item")
  ulIngredients.append(newEl)
}
  
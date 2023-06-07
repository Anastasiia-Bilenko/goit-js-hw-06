const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liEl1 = document.createElement('li');
liEl1.textContent = ingredients[0];
liEl1.classList.add("item"); 
const liEl2 = document.createElement('li');
liEl2.textContent = ingredients[1];
liEl2.classList.add("item"); 
const liEl3 = document.createElement('li');
liEl3.textContent = ingredients[2];
liEl3.classList.add("item"); 
const liEl4 = document.createElement('li');
liEl4.textContent = ingredients[3];
liEl4.classList.add("item"); 
const liEl5 = document.createElement('li');
liEl5.classList.add("item"); 
liEl5.textContent = ingredients[4];
const liEl6 = document.createElement('li');
liEl6.textContent = ingredients[5];
liEl6.classList.add("item"); 
const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(liEl1, liEl2, liEl3, liEl4, liEl5)
console.log(ulIngredients)

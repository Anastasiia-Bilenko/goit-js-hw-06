
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector("body")

const buttonEl = document.querySelector(".change-color")
const textColor = document.querySelector(".color")
 
buttonEl.addEventListener('click', changeColor);

function changeColor(evt) {
  bodyEl.style.backgroundColor = getRandomHexColor()
textColor.textContent = `${getRandomHexColor()}`
}
console.dir(textColor)
const inputEl = document.querySelector("#font-size-control");
const title = document.querySelector("#text")
console.dir(inputEl)
inputEl.addEventListener("change", inputFunction);
function inputFunction(evt) {
    title.style.fontSize = `${inputEl.value}px`
}
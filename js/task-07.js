const inputEl = document.querySelector("#font-size-control");
const title = document.querySelector("#text")
console.dir(inputEl)
inputEl.addEventListener("input", inputFunction);
function inputFunction(evt) {
    title.style.fontSize = `${evt.currentTarget.value}px`
}
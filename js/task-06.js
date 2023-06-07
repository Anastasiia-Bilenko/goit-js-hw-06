const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener("blur", checkInput);
function checkInput(evt) {
    if (inputEl.value.length > inputEl.dataset.length) {
        inputEl.classList.add("invalid")
    } else
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid") 
}
console.dir(inputEl)
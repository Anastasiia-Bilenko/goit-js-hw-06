const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", inputFuntion);
function inputFuntion(evt) {
    if (textInput.value !== "") {
        output.textContent = textInput.value.trim()
    } else output.textContent = "Anonymous"
}

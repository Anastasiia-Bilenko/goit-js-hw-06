const form = document.querySelector(".login-form")
const user = {
}
form.addEventListener("submit", formFunction)
function formFunction(evt) {
    evt.preventDefault();
    user.email = form.elements.email.value;
     user.password = form.elements.password.value;
    console.dir(user)
    form.reset()
}


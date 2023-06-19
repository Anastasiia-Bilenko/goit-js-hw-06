const form = document.querySelector(".login-form")
const user = {
}
form.addEventListener("submit", formFunction)
function formFunction(evt) {
    evt.preventDefault();
    if (form.elements.email.value === ""|| form.elements.password.value === "") {
        alert("Всі поля мають бути заповнені!")
        form.reset()
        return 
    }
    user.email = form.elements.email.value;
     user.password = form.elements.password.value;
    console.dir(user)
    form.reset()
}


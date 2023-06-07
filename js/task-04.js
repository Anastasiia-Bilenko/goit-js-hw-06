let counter = document.querySelector('#value')
let counterValue = 0 


const buttons = document.querySelectorAll('button');
const button1 = buttons[0];
const button2 = buttons[1];

const buttonClick = event => {
    counterValue += 1
    counter.textContent = counterValue
};

const buttonClick1 = event => {
    counterValue -= 1
    counter.textContent = counterValue
    
};
button1.addEventListener('click', buttonClick1);
button2.addEventListener('click', buttonClick);


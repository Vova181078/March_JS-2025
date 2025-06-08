// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.createElement('div');

let currentNumber = +localStorage.getItem('number', 'currentNumber') || 0;
currentNumber += 1;
localStorage.setItem('number', currentNumber);

div.innerHTML = currentNumber;
document.body.appendChild(div);
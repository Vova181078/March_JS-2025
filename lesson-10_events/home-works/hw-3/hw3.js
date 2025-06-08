// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


const form = document.querySelector('#form-container');

const div = document.createElement('div');
// const buttonSend = form.sendButton;
form.addEventListener('click', (e) => {
  e.preventDefault();
const nameValue = form.name.value;
const surNameValue = form.surname.value;
const ageValue = form.age.value;
let obj = {nameValue, surNameValue, ageValue};
div.innerText = obj.nameValue + ' ' + surNameValue+ ' ' + ageValue;
document.body.appendChild(div);
})
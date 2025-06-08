// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const table = document.getElementById('table');

const myForm = document.forms['myForm'];

myForm.onsubmit = function (e) {
    e.preventDefault();
let textValue = +myForm.text.value;
let boxValue = +myForm.box.value;
let dataValue = myForm.data.value;
    console.log(textValue, boxValue, dataValue);

    for (let i = 0; i < textValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < boxValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }

}
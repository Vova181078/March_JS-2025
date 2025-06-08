// #j693ca8 ---------------нема відео
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let form = document.getElementById('f-age');
form.onsubmit = function (ev) {

ev.preventDefault();

let user = {age: this.userAge.value};
    console.log(user);


}



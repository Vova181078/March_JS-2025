// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let divResult = document.getElementById("divResult");
let input = document.getElementById('num');

input.oninput = function ()  {
    const kilos = +this.value;
    divResult.innerText =  kilos * 2.2;
}
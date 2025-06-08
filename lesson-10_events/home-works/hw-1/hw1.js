// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".




let buttons = document.createElement('button');
buttons.innerText = 'press me';
buttons.onclick = () => {
 document.getElementById('text').style.display = 'none';

}
document.body.appendChild(buttons);
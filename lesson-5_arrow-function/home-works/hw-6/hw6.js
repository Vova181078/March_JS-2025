// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let createLi = (item) => {
    document.write(`<ul>
              <li>${item}</li>
              <li>${item}</li>
              <li>${item}</li>
           </ul>`);
}
createLi('hello okten');
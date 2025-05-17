// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let foobar =(item,counter) => {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${item}</li>`)

}
    document.write(`</ul>`)


}

foobar('okten', 10);
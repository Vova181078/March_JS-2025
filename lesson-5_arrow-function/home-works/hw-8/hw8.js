// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


let arrayPrymityv = (array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
    document.write(`
                        <li>${arrayElement}</li>
                  `)
    }
    document.write(`</ul>`)

}
arrayPrymityv([1, 2, 3, 4, 5, true, false, 'ghjk', 'fghjk']);
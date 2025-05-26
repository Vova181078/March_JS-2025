// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Popeluha {

    constructor (name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let prince = {
    name: 'John',
    age: 35,
    foundShoes: 28
}

let arrayPopeluhes =  [
    new Popeluha('Ania', 20,  27),
    new Popeluha('Olya',  18,  24),
    new Popeluha('Iryna',  25,  28),
    new Popeluha('Anastasia', 30, 20),
    new Popeluha('Natalya', 24,  30,),
    new Popeluha('Bozena',  28,  31),
    new Popeluha('Nika', 31,  32),
    new Popeluha('Oleksandra', 14,  35),
    new Popeluha('Albina', 16,  40),
    new Popeluha('Oksana', 19,  39),
];

 arrayPopeluhes.forEach(popeluheSize => {
    if (popeluheSize.legSize === prince.foundShoes) {
        console.log(popeluheSize.name);
    }
})

 arrayPopeluhes.find(popeluhe => {
    if (popeluhe.legSize === prince.foundShoes) {
        console.log(popeluhe.name);

    }
})
    
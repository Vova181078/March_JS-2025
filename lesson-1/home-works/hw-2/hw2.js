// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Volodymyr';
let middleName = 'Bohdanovych';
let lastName = 'Frankiv';

const person = `${firstName} ${middleName} ${lastName}`
const person2 = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
console.log(person2);
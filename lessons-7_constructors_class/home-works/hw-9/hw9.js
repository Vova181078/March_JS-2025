// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (array) {
        const yourArray = this;
        for (const item of yourArray) {
            array(item);
        }
    };



// Array.prototype.myFilter = function (array) {
//     const arr = [];
//     for (const item of this) {
//         if (array(item)) {
//             arr.push(item);
//         }
//     }
//
//     return arr;
// };

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = users.myForEach(users);
console.log(result);
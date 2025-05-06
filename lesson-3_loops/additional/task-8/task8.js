// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//
//     {id: 1, name: 'vasya', age: 31, status: false},
//
// {id: 2, name: 'petya', age: 30, status: true},
//
// {id: 3, name: 'kolya', age: 29, status: true},
//
// {id: 4, name: 'olya', age: 28, status: false}
//
// ];
//
// let citiesWithId = [
//
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//
//     {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
//
// {user_id: 4, country: 'USA', city: 'Miami'}
//
// ];
//
// let userCityArray = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     const user = usersWithId[i];
//
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const city = citiesWithId[j];
//
//         if (user.id === city.user_id) {
//             userCityArray.push({
//                 id: user.id,
//                 name: user.name,
//                 city: city.city
//             });
//         }
//     }
// }
//
// console.log(userCityArray);
// //
//
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
//     let usersWithCities = [
//
//         {
//
//             id: 1, // <===
//
//             name: ‘vasya’,
//
// age: 31,
//
//     status: false,
//
//     address: {
//
//     user_id: 1, // <===
//
//         country: ‘Ukraine’,
//
//     city: ‘Ternopil’
//
// }
//
// },
//
// // TO BE CONTINUED …..
//
// ]


//– Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let pairArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
//
// for (let i = 0; i < pairArray.length; i++) {
//    if (i % 2 === 1) {
//        console.log(pairArray[i]);
//    }
// }

//
//
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let copiedArray = [];
// let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
//
// for (let i = 0; i < Array.length; i++) {
//     if (Array[i]) {
//     copiedArray.push(i);
//
//     }
// }
// console.log(copiedArray);



//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

// let arr =['a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     if (word += arr[i]) {
//
//     }
// }
//         console.log(word);

//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

// let arr =['a', 'b', 'c'];
// let word = '';
//
// let i = 0;
// while (i < arr.length)
// if (word += arr[i]) {
//
// i++;
//      }
// console.log(word);

//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

// let arr =['a', 'b', 'c'];
//  let word = '';
// for (const wordElement of arr) {
//     if (word += wordElement) {
//
//     }
//
// }
// console.log(word);
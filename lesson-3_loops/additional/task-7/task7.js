// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.

// let emptyPairArray = [];
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         emptyPairArray.push(i);
//     }
// }
//         console.log(emptyPairArray);


//
//     b. заповнити його 50 непарними числами за допомоги циклу.

// let emptyUnPairArray = [];
// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 1) {
//         emptyUnPairArray.push(i);
//     }
// }
//         console.log(emptyUnPairArray);


//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

// let randomNumber = [];
// for (let i = 0; i < 20; i++) {
// const random = Math.floor(Math.random() * 100);
// randomNumber.push(random);
//
// }
// console.log(randomNumber);


//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let randomLimitNumber = [];
// for (let i = 0; i < 20; i++) {
//     const random = Math.floor(Math.random() * (732 - 8 + 1) + 10);
//     randomLimitNumber.push(random);
//
// }
// console.log(randomLimitNumber);
//
// 2. Вивести за допомогою console.log кожен третій елемент

// let arr = [];
// for (let i = 1; i <= 20; i+=3) {
//       arr.push(i);
//
// }
// console.log(arr);

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 1; i <= 20; i++) {
//       if (i % 2 === 0) {
//           arr.push(i);
//
//       }
//
// }
// console.log(arr);

//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

// let newArray = [];
// let arr = [];
// for (let i = 1; i <= 20; i++) {
//       if (i % 2 === 0) {
//           newArray.push(i);
//
//       } else {
//           arr.push(i);
//       }
// }
// console.log(arr);
// console.log(newArray);

//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length-1; i++) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let sum = 0;
// let sumArray = [100,250,50,168,120,345,188];
// for (let i = 0; i < sumArray.length; i++) {
//     sum += sumArray[i];
// }
// let average =  sum  / sumArray.length;
// console.log(average);
//
//
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let emptyArray = [];
// for (let i = 0; i < 20; i++) {
//     emptyArray.push(Math.floor(Math.random() * 5) + 1);
// }
// const newArray = [];
// for (let i = 0; i < 20; i++) {
//     newArray.push(emptyArray[i] * 5);
// }
// console.log(emptyArray);
// console.log(newArray);
// //
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// let newAnyArray = [];
// let anyArray = [1, 2, 3, 4, 5, true, 8, false, 24, 'dfghj', 22,';lkuokm', 'poiwunvp'];
// for (let i = 1; i <= anyArray.length; i++) {
//     if (typeof anyArray[i] === 'number') {
//         newAnyArray.push(anyArray[i]);
//     }
// }
// console.log(newAnyArray);
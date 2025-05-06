// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа
//     тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа
// тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа
// тільки парні  значення
// 6. перебрати циклом for та вивести  числа
// тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8),
// але в зворотньому циклі (с заду на перед)

let array =[2,17,13,6,22,31,45,66,100,-18];

  // // 1. перебрати його циклом while ----------------------

  // let i = 0;
  // while (i < array.length) {
  //     console.log(array[i]);
  //     i++;
  // }

// --------- 2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// ------ 3. перебрати циклом while та вивести  числа
// //     тільки з непарним індексом


// let unParNumbers = [];
//
// let i = 1;
// while (i < array.length) {
// if (array[i]) {
//     unParNumbers.push(i);
// }
//     i+=2;
// }
//     console.log(unParNumbers);

// --------// 4. перебрати циклом for та вивести  числа
// // тільки з непарним індексом--------------

// let unParNumbers = [];
//
// let i = 0;
// while (i < array.length) {
// if (array[i]) {
//     unParNumbers.push(i);
// }
//     i+=2;
// }
//     console.log(unParNumbers);


// ------5. перебрати циклом while та вивести  числа
// тільки парні  значення  -------


// let i = 0;
// while (i < array.length) {
// if (array[i] % 2 === 0) {
//     console.log(array[i]);
//
// }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (arrayElement % 2 === 0) {
//         console.log(arrayElement);
//     }
// }

// 7. замінити кожне число, кратне 3, на слово “okten”//

// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array;
//     if (arrayElement[i] % 3 === 0) {
//         arrayElement[i] = 'Okten';
//
//
//     }
//
// }
// / console.log(array);

// 8. вивести масив у зворотньому порядку.

// for (let i = array.length -1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
// }


// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     // let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function stringToArray(arr) {
    if (arr) {
  const split = arr.split(' ');
  return split;
    }
    return [''];

}



console.log(stringToArray(str));


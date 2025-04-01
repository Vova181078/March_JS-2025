// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let x = +'';


if (x <= 14) {
    console.log('1 part')
} else if (x >= 14 && x <= 29) {
    console.log('2 part')
} else if (x >= 29 && x <= 44) {
    console.log('3 part')
} else if (x >= 45 && x <= 59) {
    console.log('4 part')
}

console.log(x);




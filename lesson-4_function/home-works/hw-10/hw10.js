// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

function minInteger(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
           min = number;
        }

    }
    return min;
}

console.log(minInteger([1, 25, 14, -4, 56]));
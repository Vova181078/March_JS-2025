// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function  sortNums(array,direction) {
    if(direction === 'asc') {
     return array.sort((a,b) => a - b);
    } else if(direction === 'desc') {
        return array.sort((a,b) => b - a);
    } else {
        return array;
    }
}

console.log(sortNums(nums,'asc'));
console.log(sortNums(nums, 'desc'));


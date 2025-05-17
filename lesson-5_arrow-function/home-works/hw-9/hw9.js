// #bovDJDTIjt – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.

let arrayData = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age} year</div>`)
    }
}
arrayData([
    {id:1, name:'vasya',age: 22},
    {id:2, name:'petya',age: 26},
    {id:3, name:'olya',age: 28},
    {id:4, name:'kokos',age: 40},
    {id:5, name:'arbus',age: 30}
]);

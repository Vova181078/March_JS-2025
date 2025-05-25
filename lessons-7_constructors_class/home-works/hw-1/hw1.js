// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name,surname,email, phone) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;


}


let users = [
    new User(1, 'vova', 'kokos', 'hfoij@com', '543216'),
 new User(2, 'vitsa', 'kokos', 'hfoij@com', '543216'),
 new User(3, 'liova', 'kokos', 'hfoij@com', '543216'),
 new User(4, 'petya', 'kokos', 'hfoij@com', '543216'),
new User(5, 'ira', 'kokos', 'hfoij@com', '543216'),
new User(6, 'dasha', 'kokos', 'hfoij@com', '543216'),
new User(7, 'mikita', 'kokos', 'hfoij@com', '543216'),
new User(8, 'alex', 'kokos', 'hfoij@com', '543216'),
new User(9, 'nata', 'kokos', 'hfoij@com', '543216'),
new User(10, 'oleg', 'kokos', 'hfoij@com', '543216')
];

console.log(users);
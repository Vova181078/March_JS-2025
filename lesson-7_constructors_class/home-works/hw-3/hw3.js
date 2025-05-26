// HKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)



function User(id, name,surname,email, phone) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;


}


let users = [
    new User(2, 'vova', 'kokos', 'hfoij@com', '543216'),
    new User(1, 'vitsa', 'kokos', 'hfoij@com', '543216'),
    new User(3, 'liova', 'kokos', 'hfoij@com', '543216'),
    new User(8, 'petya', 'kokos', 'hfoij@com', '543216'),
    new User(9, 'ira', 'kokos', 'hfoij@com', '543216'),
    new User(6, 'dasha', 'kokos', 'hfoij@com', '543216'),
    new User(7, 'mikita', 'kokos', 'hfoij@com', '543216'),
    new User(5, 'alex', 'kokos', 'hfoij@com', '543216'),
    new User(4, 'nata', 'kokos', 'hfoij@com', '543216'),
    new User(10, 'oleg', 'kokos', 'hfoij@com', '543216')
];


console.log(users.sort( (a, b) => a.id - b.id));
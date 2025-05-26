// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


function User(id, name, surname, email, phone) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users = [
    new User(1, 'vova', 'kokos', 'hfoij@com', '543216'),
    new User(2, 'vitsa', 'kokost', 'hfoij@com', '543216'),
    new User(3, 'liova', 'kokoskh', 'hfoij@com', '543216'),
    new User(4, 'petya', 'kokoskj', 'hfoij@com', '543216'),
    new User(5, 'ira', 'kokos', 'hfoij@com', '543216'),
    new User(6, 'dasha', 'kokosghj', 'hfoij@com', '543216'),
    new User(7, 'mikita', 'kokoslkj', 'hfoij@com', '543216'),
    new User(8, 'alex', 'kokospoi', 'hfoij@com', '543216'),
    new User(9, 'nata', 'kokosyhj', 'hfoij@com', '543216'),
    new User(10, 'oleg', 'kokosfg', 'hfoij@com', '543216')
];

const filteredUsers = users.filter(user => {
    return user.id % 2 === 0
})


console.log(filteredUsers);
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//


function Client (id, name, surname, email, phone, ...products) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = products;

}

const client =  [
    new Client( 1, 'John','John', 'john@gmail.com',  '+65465265',  [1, 'tomato']),
    new Client( 2, 'John',  'John', 'john@gmail.com',  '+65465265', [2, 'tomato']),
    new Client( 3, 'John',  'John', 'john@gmail.com',  '+65465265', [3, 'tomato']),
    new Client( 4, 'John',  'John', 'john@gmail.com',  '+65465265', [18, 'tomato']),
    new Client( 5, 'John',  'John', 'john@gmail.com',  '+65465265', [10, 'tomato']),
    new Client( 6, 'John',  'John', 'john@gmail.com',  '+65465265', [17, 'tomato']),
    new Client( 7, 'John',  'John', 'john@gmail.com',  '+65465265', [1, 'tomato']),
    new Client( 8, 'John',  'John', 'john@gmail.com',  '+65465265', [17, 'tomato']),
    new Client( 9, 'John',  'John', 'john@gmail.com',  '+65465265', [189, 'tomato']),
    new Client( 10, 'John',  'John', 'john@gmail.com',  '+65465265', [41, 'tomato'])

];

console.log(client);
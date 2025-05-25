function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

}

const clients =  [
    new Client( 1, 'John','John', 'john@gmail.com',  '+65465265',  [{title:'juice', product:'tomato'},{title:2, juice:'tomato'}]),
    new Client( 2, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'}]),
    new Client( 3, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'},{title:'juice', product:'tomato'},{title:'juice', product:'tomato'}]),
    new Client( 4, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'}]),
    new Client( 5, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'},{title:'juice', product:'tomato'}]),
    new Client( 6, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'}]),
    new Client( 7, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'},{title:'juice', product:'tomato'},{title:'juice', product:'tomato'}]),
    new Client( 8, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'}]),
    new Client( 9, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'},{title:'juice', product:'tomato'}]),
    new Client( 10, 'John',  'John', 'john@gmail.com',  '+65465265', [{title:'juice', product:'tomato'}])

];

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);
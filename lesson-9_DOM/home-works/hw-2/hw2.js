// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const array = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
for (const arrElement of array) {
const li = document.createElement('li');
    li.innerText = arrElement;
    ul.appendChild(li);
}

document.body.appendChild(ul);
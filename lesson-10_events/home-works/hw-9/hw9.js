// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів




const press = document.getElementById('press');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const arr = [];
for (let i = 0; i < 100; i++) {
       arr.push({id: 1, name: 'kolya' + (i + 1)});



    let counter = 0;
    let limit = 10;
       press.addEventListener('click', function () {

           next.innerText = '';

           for (let j = counter; limit < 10; j++) {
               const p = document.createElement('p');
               p.innerText = arr[j].name;
               next.appendChild(p);


               }


       })
             press.addEventListener('click', function ()  {

               prev.innerText = '';
               for (let k = counter; limit > 10; k--) {
                   const p2 = document.createElement('p');
                   p2.innerText = arr[k].name;
                   prev.appendChild(p2);

               }

           }

       )

}


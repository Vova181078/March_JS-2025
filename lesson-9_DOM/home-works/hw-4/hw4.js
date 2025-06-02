// #Kx1xgoKy8
// - Є масив
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const divElement of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.className = 'item';
    const h1 = document.createElement('h1');
    h1.className = 'heading';
    h1.innerText = `${divElement.title}`;
    const p =  document.createElement('p');
    p.className = 'description';
    p.innerText = `${divElement.monthDuration}`;
    div.append(h1,p);
    document.body.appendChild(div);
}
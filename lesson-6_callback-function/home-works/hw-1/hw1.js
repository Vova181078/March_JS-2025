// #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’

let a = 'hello world';
console.log(a.length)

let b = 'lorem ipsum';
console.log(b.length);

let c = 'javascript is cool';
console.log(c.length);

const string = [a, b, c];
for (const item of string) {
    console.log(item.length);
}
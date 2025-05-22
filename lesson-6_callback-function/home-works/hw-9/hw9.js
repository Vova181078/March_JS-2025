// lhP
// описати колоду карт (від 6 до туза без джокерів) Більшу частину колоди можна описати з використанням циклу
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//  {
//     cardSuit:  ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//
// color: 'red', 'black'

// }

// 1. описати колоду карт (від 6 до туза без джокерів) Більшу частину колоди можна описати з використанням циклу

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
suits.forEach(suit => values.forEach(value => {
    const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);

}))


console.log(cards);

// 2. - знайти піковий туз

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));

// 3. - всі шістки
console.log(cards.filter(card => card.value === '6'));

// 4. - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));

// 5.- всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

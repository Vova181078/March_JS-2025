// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).


let day = +'';

if (day < 10) {
    console.log('1-decade');
} else if (day >= 10 && day < 20) {
    console.log('2-decade');
}else if (day >= 20 && day <= 31) {
    console.log('3-decade');
}


console.log(day);
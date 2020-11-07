// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//     Обязательно использовать оператор return.

// основые операции (плюс + минус - деление / умножение *)

// let a = +prompt('Введите первое число: '); // "+" преобразует строку в число
// let b = +prompt('Введите второе число: ');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRandomInt(0, 100);
let b = getRandomInt(0, 100);

console.log(a)
console.log(b)

function plus(a, b){
    return a + b;
}
let pl = plus(a, b);
console.log(`Сложение: ${pl}`);

function minus(a, b){
    return a - b;
}
let mn = minus(a, b);
console.log(`Вычитание: ${mn}`);

function division(a, b){
    return a / b;
}
let div = division(a, b);
console.log(`Деление: ${div}`);

function multiplication(a, b){
    return a * b;
}
let mul = multiplication(a, b);
console.log(`Умножение: ${mul}`);


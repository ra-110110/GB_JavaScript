// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.
//
let val = prompt('Введите число', '');
let pow = prompt('Введите степень', '');

function power(val, pow) {
    if (pow !== 1) {
        return val * power(val, pow - 1);
    }
    return val;
}

// console.log(power(2, 5)) //32

alert(power(val, pow))
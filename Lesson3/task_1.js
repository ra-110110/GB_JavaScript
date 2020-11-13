// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

//простое число  - натуральное (целое положительное) число, у которого два натуральных делителя
// — единица и число самого себя
"use strict";

let i = 0;
while (i <= 100) {
    if (isPrime(i)) {
        console.log(i);
    }
    i++;
}

function isPrime(value) {
    if (value < 2) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRandomInt(-10, 20);
let b = getRandomInt(-10, 20);

console.log(a)
console.log(b)

function Res() {
    if (a >= 0 && b >= 0) {
        if (a > b) {
            return a - b;
        } else if (b > a) {
            return b - a;
        }
    } else if (a <= 0 && b <= 0) {
        return a * b;
    } else {
        return a + b;
    }
}

console.log(Res());

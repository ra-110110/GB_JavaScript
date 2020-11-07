// 6. Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов,
//     operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

let arg1 = +prompt('Введите первый аргумент', '');
let arg2 = +prompt('Введите второй аргумент', '');
let operation = prompt('Введите название операции', '\'сложение\' или \'вычитание\' или \'умножение\' ' +
    'или \'деление\'');

console.log(arg1)
console.log(arg2)


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return `Сумма: ${arg1 + arg2}`;
        case 'вычитание':
            return `Разность: ${arg1 - arg2}`;
        case 'умножение':
            return `Произведение: ${arg1 * arg2}`;
        case 'деление':
            return `Частное: ${arg1 / arg2}`;
    }
}

alert(mathOperation(arg1, arg2, operation));
console.log(mathOperation(arg1, arg2, operation));
/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
// const num = parseInt(prompt('Введите число от 0 до 999: '));
let a = Math.round(Math.random() * 999)
console.log(a)

function Number_to_split(num) {
    let ar_num = [];
    if (num == 0) {
        ar_num.push({'единицы': 0});
    } else if (num > 0 && num < 10) {
        ar_num.push({'единицы': num});
    } else if (num >= 10 && num < 100) {
        ar_num.push({'единицы': ~~(num / 10), 'десятки': num % 10});
    } else if (num >= 100 && num < 1000) {
        ar_num.push({'единицы': ~~(num / 100), 'десятки': (~~(num / 10)) % 10, 'сотни': (num % 10) % 10});
    } else if (num >= 1000) {
        console.log('Вы ввели число вне диапазона!')
        ar_num.push({'число': num});


    }
    return (ar_num[0])
}

//тесты ----->
// console.log(Number_to_split(0))
// console.log(Number_to_split(1))
// console.log(Number_to_split(9))
// console.log(Number_to_split(10))
// console.log(Number_to_split(11))
// console.log(Number_to_split(99))
// console.log(Number_to_split(54))
// console.log(Number_to_split(100))
// console.log(Number_to_split(560))
// console.log(Number_to_split(999))
// console.log(Number_to_split(598))
// console.log(Number_to_split(780))
// console.log(Number_to_split(1000))
// console.log(Number_to_split(545545))
console.log(Number_to_split(a))








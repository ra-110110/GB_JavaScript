let a = Math.round(Math.random() * 999)
console.log(a)

function Number_to_split(num) {
    let ar_num = {};

    if (num == 0) {
        ar_num['единицы'] = 0;
    } else if (num > 0 && num < 10) {
        ar_num['единицы'] = num;
    } else if (num >= 10 && num < 100) {
        ar_num['единицы'] = ~~(num / 10);
        ar_num['десятки'] = num % 10;
    } else if (num >= 100 && num < 1000) {
        ar_num['единицы'] = ~~(num / 100);
        ar_num['десятки'] = (~~(num / 10)) % 10;
        ar_num['сотни'] = (num % 10) % 10;
    } else if (num >= 1000) {
        console.log('Вы ввели число вне диапазона!')
        ar_num['число'] =num;
    }
    return (ar_num)
}

console.log(Number_to_split(a))
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
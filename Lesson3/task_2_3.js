/*2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
'use strict'
let store = [
    {obj: 'laptop', type: 'tech.', code: '000111', price: 15000},
    {obj: 'RAM', type: 'tech.', code: '1212000', price: 5000},
    {obj: 'HDD', type: 'tech.', code: '1234567', price: 8000}
];

function countBasketPrice(store) {
    let sum_price = 0;
    for (let i = 0; i < store.length; i++) {
        sum_price += store[i].price;
    }
    return sum_price;
}

console.log('Общая стоимость корзины: ' + countBasketPrice(store));


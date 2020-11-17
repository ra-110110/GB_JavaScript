/*3.Продолжить работу с интернет-магазином:
3.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
3.2. Реализуйте такие объекты.
3.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/


/*решение из прошлого задания ----> */
'use strict'
// let store = [
//     {obj: 'laptop', type: 'tech.', code: '000111', price: 15000},
//     {obj: 'RAM', type: 'tech.', code: '1212000', price: 5000},
//     {obj: 'HDD', type: 'tech.', code: '1234567', price: 8000}
// ];
//
// function countBasketPrice(store) {
//     let sum_price = 0;
//     for (let i = 0; i < store.length; i++) {
//         sum_price += store[i].price;
//     }
//     return sum_price;
// }
//
// console.log('Общая стоимость корзины: ' + countBasketPrice(store));

/*новое решение ----> */
let store = {
    goods: [
        {obj: 'laptop', type: 'tech.', code: '000111', price: 15000, quantity: 2},
        {obj: 'RAM', type: 'tech.', code: '1212000', price: 5000, quantity: 2},
        {obj: 'HDD', type: 'tech.', code: '1234567', price: 8000, quantity: 2}
    ],
    countBasketPrice() {
        return this.goods.reduce((total, good) => total + good.price * good.quantity, 0);
    },
}
console.log(store.countBasketPrice());





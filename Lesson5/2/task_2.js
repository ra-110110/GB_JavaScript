/** 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 * 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
 * 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

'use strict'
//корзина
let store = {
    goods: [
        {obj: 'laptop', type: 'tech.', code: '000111', price: 15000, quantity: 2},
        {obj: 'RAM', type: 'tech.', code: '1212000', price: 5000, quantity: 2},
        {obj: 'HDD', type: 'tech.', code: '1234567', price: 8000, quantity: 3}
    ],
    countBasketPrice() {
        return this.goods.reduce((total, good) => total + good.price * good.quantity, 0);
    },
    countBasketQt() {
        return this.goods.reduce((sumQt, good) => sumQt + good.quantity, 0);
    }
};

//расчет
let m = store.countBasketPrice();
let n = store.countBasketQt();

function Items() {
    if (n >= 1) {
        document.write(`В корзине: ${n} товаров на сумму: ${m} рублей`);
    } else {
        document.write('Корзина пуста')
    }
}

Items();






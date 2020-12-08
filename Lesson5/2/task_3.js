/** 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS
 * 3.1. Создать массив товаров (сущность Product);
 * 3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
 * HTML-код должен содержать только div id=”catalog” без вложенного кода.
 * Весь вид каталога генерируется JS.*/

// 'use strict'

// document.write('Мы товары в корзине');

// let store = {
//     goods: [
//         {obj: 'laptop', type: 'tech.', code: '000111', price: 15000, quantity: 2},
//         {obj: 'RAM', type: 'tech.', code: '1212000', price: 5000, quantity: 2},
//         {obj: 'HDD', type: 'tech.', code: '1234567', price: 8000, quantity: 3}
//     ]
// };


function foo() {
    for (let i = 0; i < store.goods.length; i++) {
        // console.log(store.goods[i]);
        var obj = store.goods[i]["obj"]
        var price = store.goods[i]["price"]
        var quantity = store.goods[i]["quantity"];

        document.write(`<div class="good">
                    <div><b>Наименование</b>: ${obj}</div>
                    <div><b>Цена за шт.</b>: ${price}</div>
                    <div><b>Количество</b>: ${quantity}</div>
                    <div><b>Стоимость</b>: ${quantity * price}</div>
                </div>`)
    }
}


// document.write(foo());
// console.log(foo());
foo();


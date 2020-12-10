"use strict";
//корзина
let store = {
    goods: [
        { obj: "laptop", type: "tech.", code: "000111", price: 15000, quantity: 2 },
        { obj: "RAM", type: "tech.", code: "1212000", price: 5000, quantity: 2 },
        { obj: "HDD", type: "tech.", code: "1234567", price: 10000, quantity: 5 },
    ],
    countBasketPrice() {
        return this.goods.reduce(
            (total, good) => total + good.price * good.quantity,
            0
        );
    },
    countBasketQt() {
        return this.goods.reduce((sumQt, good) => sumQt + good.quantity, 0);
    },
};

//расчет
let main_div = document.querySelector(".main");
let cart_div = document.createElement("div");
cart_div.className = "cart";
let my_cart = document.createElement("h1");
my_cart.innerHTML = "Моя корзина";
main_div.appendChild(cart_div);
cart_div.appendChild(my_cart);

let div_all = document.createElement("div");
div_all.className = "div_all";
main_div.appendChild(div_all);

let m = store.countBasketPrice();
let n = store.countBasketQt();

function Items() {
    if (n >= 1) {
        div_all.insertAdjacentHTML(
            "beforeend",
            `<p>В корзине: ${n} товаров на сумму: ${m} рублей</p>`
        );
    } else {
        div_all.insertAdjacentHTML("beforeend", "Корзина пуста");
    }
}
Items();
//товары на экране
let product_on_cart = document.createElement("h2");
product_on_cart.innerHTML = "Товары в корзине";
div_all.appendChild(product_on_cart);

function Product_screen() {
    for (let i = 0; i < store.goods.length; i++) {
        // console.log(store.goods[i]);
        var obj = store.goods[i]["obj"];
        var price = store.goods[i]["price"];
        var quantity = store.goods[i]["quantity"];

        div_all.insertAdjacentHTML(
            "beforeend",
            `<div class="good">
                <div><b>Наименование</b>: ${obj}</div>
                <div><b>Цена за шт.</b>: ${price}</div>
                <div><b>Количество</b>: ${quantity}</div>
                <div><b>Стоимость</b>: ${quantity * price}</div>
            </div>`
        );
    }
}
Product_screen();
//кнопка очистки
let button_clear = document.createElement("button");
button_clear.className = "button";
button_clear.innerHTML = "Очистить корзину";
main_div.appendChild(button_clear);

function btn() {
    alert("Корзина очищена!");
    div_all.innerHTML = "";
    my_cart.insertAdjacentHTML("afterend", "Корзина пуста");
}

button_clear.addEventListener("click", btn);
"use strict";
const cartAddItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.obj}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button class="button_item button" id="item_btn">Добавить в корзину</button>
                </div>`;
    },
};

const Addcart = {
    cartListBlock: null,
    cartAddButton: null,
    cartAddItem,
    goods: [{
            obj: "mouse",
            type: "tech.",
            code: "1234567",
            price: 8000,
            quantity: 1,
            img: "https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F401-mouse-256.png",
        },
        {
            obj: "block",
            type: "tech.",
            code: "156489751",
            price: 10000,
            quantity: 4,
            img: "https://cdn1.iconfinder.com/data/icons/devices-66/136/ipad_air-256.png",
        },
    ],

    init() {
        this.Addcart = document.querySelector(".new-item");
        this.render();
        this.PushWithButton();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach((good) => {
                this.Addcart.insertAdjacentHTML(
                    "beforebegin",
                    this.cartAddItem.render(good)
                );
            });
        }
    },
    PushWithButton() {
        this.cartAddButton = document.querySelectorAll(".button_item");
        for (let i = 0; i < this.cartAddButton.length; i++) {
            this.cartAddButton[i].addEventListener(
                "click",
                function GetBlockWithItem() {
                    let arr = Addcart.goods;
                    let a = cart.goods.push(arr[i]);
                    Object.assign(cart.goods, a);
                    document.getElementById("cart_id_list").innerHTML = "";
                    cart.render();
                }
            );
        }
    },
};
Addcart.init();
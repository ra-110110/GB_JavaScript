/**
 * 1. Продолжаем реализовывать модуль корзины
 * а) Добавлять в объект корзины выбранные товары по клику на кнопке "Купить" без перезагрузки страницы;
 * б) привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
 * */

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.obj}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartClearButton: null,
    cartItem,
    goods: [
        {
            obj: 'laptop',
            type: 'tech.',
            code: '000111',
            price: 15000,
            quantity: 2,
            img: "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/email-laptop-256.png"
        },
        {
            obj: 'RAM',
            type: 'tech.',
            code: '1212000',
            price: 5000,
            quantity: 2,
            img: "https://cdn1.iconfinder.com/data/icons/computer-hardware-529/64/Processor-chip-cpu-memory-ram-256.png"
        },
        {
            obj: 'HDD',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/devices/hdd_mount.png"
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartClearButton = document.querySelector('.cart-btn');
        this.cartClearButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();

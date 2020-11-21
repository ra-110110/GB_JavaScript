const cartAddItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.obj}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const Addcart = {
    cartListBlock: null,
    cartAddButton: null,
    cartAddItem,
    goods: [
        {
            obj: 'mouse',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 1,
            img: "https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F401-mouse-256.png",
        }
    ],
    init() {
        this.Addcart = document.querySelector('.new-item');
        this.cartAddButton = document.querySelector('.item-btn-1');
        this.cartAddButton.addEventListener('click', this.PushItem);

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.Addcart.insertAdjacentHTML('beforebegin', this.cartAddItem.render(good));
            });
        }
    },
    PushItem() {
        a = cart.goods.push(Addcart.goods[0])
        Object.assign(cart.goods, a)
        document.getElementById('cart_id_list').innerHTML = '';
        cart.render();

    }
};
Addcart.init();

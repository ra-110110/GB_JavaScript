//товары
let cart = {
    goods: [
        {
            obj: 'laptop',
            type: 'tech.',
            code: '000111',
            price: 15000,
            quantity: 2,
            img: "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/email-laptop-256.png",
            full_img: "https://www.ixbt.com/img/x780/n1/news/2019/9/3/Galaxy-Book-Flex-15_3_large.jpg"
        },
        {
            obj: 'RAM',
            type: 'tech.',
            code: '1212000',
            price: 5000,
            quantity: 2,
            img: "https://cdn1.iconfinder.com/data/icons/computer-hardware-529/64/Processor-chip-cpu-memory-ram-256.png",
            full_img: "https://items.s1.citilink.ru/878482_v01_b.jpg"
        },
        {
            obj: 'HDD',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/devices/hdd_mount.png",
            full_img: "https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6001908636.jpg"
        },

        {
            obj: 'mouse',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F401-mouse-256.png",
            full_img: "https://cdn1.ozone.ru/s3/multimedia-n/wc1200/6019461191.jpg"
        },

        {
            obj: 'keyboard',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/apple-products-set/128/Apple_Magic_Keyboard-2-256.png",
            full_img: "https://avatars.mds.yandex.net/get-mpic/175985/img_id3773806080808485674/orig"
        },

        {
            obj: 'mouse pad',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/electronics-technology-2/33/mouse_2-256.png",
            full_img: "https://static.onlinetrade.ru/img/items/m/kovrik_dlya_myshi_corsair_gaming_mm800_rgb_polaris_mouse_pad_400mm_x_340mm_x_35mm__1084587_1.jpg"

        },

        {
            obj: 'the tablet',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn1.iconfinder.com/data/icons/devices-66/136/ipad_air-256.png",
            full_img: "https://items.s1.citilink.ru/1418863_v01_b.jpg"
        },

        {
            obj: 'network card',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            img: "https://cdn0.iconfinder.com/data/icons/computer-technology-28/512/320_Sim_Card_Mobile_Network-256.png",
            full_img: "https://img.xcomdb.ru/b1/1c/5dcd5a6b11c1e232206051_750.jpg"
        },

        {
            obj: 'module',
            type: 'tech.',
            code: '1234567',
            price: 8000,
            quantity: 3,
            "img": "https://cdn1.iconfinder.com/data/icons/sound-studio/64/sound_synthesizer_analog_connection_device_module_midi-256.png",
            full_img: "https://ciscolink-store.ru/files/products/c3kx-sm-10g-1.800x600w.jpg"
        },
    ],
};

let GoodsOut = '';
let i = 1
for (let key in cart.goods) {
    GoodsOut +=

        `<div class="item">
                    <div><b>Наименование</b>: ${cart.goods[key].obj}</div>
                    <div><b>Цена за шт.</b>: ${cart.goods[key].price}</div>
                    <div><b>Количество</b>: ${cart.goods[key].quantity}</div>
                    <div><img id="full_img_id_${i}" class="full_img modal-open" src="${cart.goods[key].full_img}" alt="<Большая_картинка_${i}"></div>
                    <div><img id="img_id_${i}" class="img" onclick="" src="${cart.goods[key].img}" alt="Картинка_${i}"></div>
                    <div><button class="new_goods" id="button_id_${i}">Добавить в корзину</button></div>
        </div>`;
    i++
}
document.getElementById("out").innerHTML = GoodsOut;

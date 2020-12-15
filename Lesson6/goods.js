"use strict";
//товары
let cart = {
    goods: [{
            obj: "laptop",
            type: "tech.",
            code: "000111",
            price: 15000,
            quantity: 2,
            img: "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/email-laptop-256.png",
            full_img: "https://www.ixbt.com/img/x780/n1/news/2019/9/3/Galaxy-Book-Flex-15_3_large.jpg",
        },
        {
            obj: "RAM",
            type: "tech.",
            code: "1212000",
            price: 5000,
            quantity: 2,
            img: "https://cdn1.iconfinder.com/data/icons/computer-hardware-529/64/Processor-chip-cpu-memory-ram-256.png",
            full_img: "https://store.hp.com/app/assets/images/uploads/prod/what-are-gigabytes-of-ram-hero157469918702215.png",
        },
        {
            obj: "HDD",
            type: "tech.",
            code: "1234567",
            price: 8000,
            quantity: 3,
            img: "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/devices/hdd_mount.png",
            full_img: "https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6001908636.jpg",
        },

        {
            obj: "mouse",
            type: "tech.",
            code: "1234567",
            price: 500,
            quantity: 10,
            img: "https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/1F401-mouse-256.png",
            full_img: "https://cdn1.ozone.ru/s3/multimedia-n/wc1200/6019461191.jpg",
        },

        {
            obj: "keyboard",
            type: "tech.",
            code: "1234567",
            price: 4000,
            quantity: 2,
            img: "https://cdn2.iconfinder.com/data/icons/apple-products-set/128/Apple_Magic_Keyboard-2-256.png",
            full_img: "https://avatars.mds.yandex.net/get-mpic/175985/img_id3773806080808485674/orig",
        },

        {
            obj: "mouse pad",
            type: "tech.",
            code: "1234567",
            price: 2000,
            quantity: 10,
            img: "https://cdn2.iconfinder.com/data/icons/electronics-technology-2/33/mouse_2-256.png",
            full_img: "https://static.onlinetrade.ru/img/items/m/kovrik_dlya_myshi_corsair_gaming_mm800_rgb_polaris_mouse_pad_400mm_x_340mm_x_35mm__1084587_1.jpg",
        },

        {
            obj: "the tablet",
            type: "tech.",
            code: "1234567",
            price: 10000,
            quantity: 4,
            img: "https://cdn1.iconfinder.com/data/icons/devices-66/136/ipad_air-256.png",
            full_img: "https://fainaidea.com/wp-content/uploads/2019/06/30036513b-1.jpg",
        },

        {
            obj: "network card",
            type: "tech.",
            code: "1234567",
            price: 5000,
            quantity: 5,
            img: "https://cdn0.iconfinder.com/data/icons/computer-technology-28/512/320_Sim_Card_Mobile_Network-256.png",
            full_img: "https://img.xcomdb.ru/b1/1c/5dcd5a6b11c1e232206051_750.jpg",
        },

        {
            obj: "module",
            type: "tech.",
            code: "1234567",
            price: 9000,
            quantity: 1,
            img: "https://cdn1.iconfinder.com/data/icons/sound-studio/64/sound_synthesizer_analog_connection_device_module_midi-256.png",
            full_img: "https://ciscolink-store.ru/files/products/c3kx-sm-10g-1.800x600w.jpg",
        },
    ],
};

function Goods() {
    let GoodsOut = "";
    let i = 1;
    for (let key in cart.goods) {
        GoodsOut += `<div class="item">
                    <div><b>Наименование</b>: ${cart.goods[key].obj}</div>
                    <div><b>Цена за шт.</b>: ${cart.goods[key].price}</div>
                    <div><b>Количество</b>: ${cart.goods[key].quantity}</div>
                    <div id="my_modal_${i}" class="modal">
                        
                        
                        <div class="modal_content">
                        <div> <span class="close_modal_window">×</span></div>
                        <div class="slider"><img id="full_img_id_${i}" class="full_img hidden" src="${cart.goods[key].full_img}" alt="<Большая_картинка_${i}"></div>
                        </div>
                        
                    </div>
                    <div><img id="img_id_${i}" class="small_img" src="${cart.goods[key].img}" alt="Картинка_${i}"></div>
                    <div><button class="new_goods" id="button_id_${i}">Добавить в корзину</button></div>
        </div>`;
        i++;
    }
    document.getElementById("out").innerHTML = GoodsOut;
}
Goods();

//добавление в корзину по нужной кнопке
let btn = document.querySelectorAll("button");

function itemInCart() {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].addEventListener("click", cartFuncNew));
    }
}
itemInCart();

function cartFuncNew() {
    console.log("добавлено в корзину");
}

//модальное окно
let modal = document.getElementsByClassName("modal");
let span = document.getElementsByClassName("close_modal_window");
let small_img = document.getElementsByClassName("small_img");
let open_modal = null;

function ClickToSmallImg() {
    for (let si = 0; si < small_img.length; si++) {
        if (
            small_img[si].addEventListener("click", function() {
                modal[si].style.display = "block";
                open_modal = modal[si];
            })
        );
        for (let s = 0; s < span.length; s++) {
            if (
                span[s].addEventListener("click", function() {
                    modal[si].style.display = "none";
                })
            );
        }
        window.addEventListener("click", function(event) {
            if (event.target == modal[si]) {
                modal[si].style.display = "none";
            }
        });
    }
}
ClickToSmallImg();

//кнопочки
let slider = document.querySelectorAll(".slider");

function sunSlider() {
    for (let s = 0; s < slider.length; s++) {
        let loadIcon = document.createElement("i");
        loadIcon.classList.add("fas", "fa-sun", "fa-spin", "sun_inside");
        slider[s].className = "sun";
        slider[s].insertAdjacentElement("afterbegin", loadIcon);
    }
}
sunSlider();

function Left() {
    for (let mod = 0; mod < slider.length; mod++) {
        let leftIcon = document.createElement("i");
        leftIcon.classList.add(
            "fas",
            "fa-chevron-circle-left",
            "slider-leftArrow",
            "left_inside"
        );
        slider[mod].insertAdjacentElement("afterbegin", leftIcon);
    }
}
Left();

function Right() {
    for (let mod = 0; mod < slider.length; mod++) {
        let rightIcon = document.createElement("i");
        rightIcon.classList.add(
            "fas",
            "fa-chevron-circle-right",
            "slider-rightArrow",
            "right_inside"
        );
        slider[mod].insertAdjacentElement("beforeend", rightIcon);
    }
}
Right();

// иконка зарузки
window.addEventListener("load", function() {
    hideLoadIcon();
    fullOpenImg();
});

function hideLoadIcon() {
    let sun = document.getElementsByClassName("sun_inside");
    for (let icon = 0; icon < sun.length; icon++) {
        sun[icon].style.display = "none";
    }
}

// переключение картинок с кнопок (прокрутка всех товаров в одном потоке)
function fullOpenImg() {
    let full_img_сollection = document.getElementsByClassName("full_img");
    for (
        let ful_img_el = 0; ful_img_el < full_img_сollection.length; ful_img_el++
    ) {
        let ful_img_cl = full_img_сollection[ful_img_el];
        ful_img_cl.classList.remove("hidden");
    }

    let right_switch_сollection = document.getElementsByClassName("right_inside");
    let left_switch_сollection = document.getElementsByClassName("left_inside");
    for (let r = 0; r < right_switch_сollection.length; r++) {
        let elemR = right_switch_сollection[r];
        elemR.addEventListener("click", function() {
            clickToRight();
        });
    }
    for (let l = 0; l < left_switch_сollection.length; l++) {
        let elemL = left_switch_сollection[l];
        elemL.addEventListener("click", function() {
            clickToLeft();
        });
    }

    function clickToRight() {
        let IdModalEl = parseInt(open_modal.id.match(/\d+/));
        open_modal.style.display = "none";
        IdModalEl = IdModalEl + 1;

        if (IdModalEl < modal.length + 1) {
            let modal_id = `my_modal_${IdModalEl}`;
            modal[modal_id].style.display = "block";
            open_modal = modal[modal_id];
        } else {
            open_modal = modal[0];
            open_modal.style.display = "block";
        }
    }

    function clickToLeft() {
        let IdModalEl = parseInt(open_modal.id.match(/\d+/));
        open_modal.style.display = "none";
        IdModalEl = IdModalEl - 1;
        if (IdModalEl > 0) {
            let modal_id = `my_modal_${IdModalEl}`;
            modal[modal_id].style.display = "block";
            open_modal = modal[modal_id];
        } else {
            open_modal = modal[modal.length - 1];
            open_modal.style.display = "block";
        }
    }
}
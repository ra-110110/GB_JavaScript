/** 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
 * Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
 * Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 * 1*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
 */

"use strict";
//Традиционная шахматная доска, описанная в правилах ФИДЕ, представляет собой поле 8 × 8 (всего 64)
// чередующихся по вертикали и горизонтали тёмных и светлых полей (клеток);
// поле, обозначаемое как a1, — чёрное.//

// create a chess table 8x8.

let chess_board = [
    ["Ладья", "Конь", "Слон", "Ферзь", "Король", "Слон", "Конь", "Ладья"],
    ["Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка"],
    [],
    [],
    [],
    [],
    ["Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка"],
    ["Ладья", "Конь", "Слон", "Король", "Ферзь", "Слон", "Конь", "Ладья"],
];

function Create() {
    let border = document.querySelector(".border");
    let border_div = document.createElement("div");

    border_div.className = "arr";
    border_div.innerHTML =
        "<a>a</a> <a>b</a> <a>c</a> <a>d</a> <a>e</a> <a>f</a> <a>g</a> <a>h</a>";
    border.appendChild(border_div);

    let main_block_div = document.createElement("div");
    main_block_div.className = "main_block";
    border.appendChild(main_block_div);

    let num_div = document.createElement("div");
    num_div.className = "num";
    border.appendChild(num_div);
}

function Script() {
    let num = document.querySelector(".num");
    for (let i = 1; i <= 8; i++) {
        let num1 = document.createElement("div");
        num1.textContent = i;
        num.appendChild(num1);
    }
}

function Chess() {
    let main_block = document.querySelector(".main_block");
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j === 0) flag = !flag;

            let block = document.createElement("div");
            let nameFigure = document.createElement("p");

            nameFigure.textContent = chess_board[i][j];

            if (flag) block.className = "block black";
            else block.className = "block white";

            if (i < 2 || i > 5) block.appendChild(nameFigure); //добавляет построчно имена фигур

            main_block.appendChild(block);
            flag = !flag;
        }
    }
}

Create();
Script();
Chess();
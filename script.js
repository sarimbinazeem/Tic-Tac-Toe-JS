const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".status");
const reset = document.querySelector(".reset");

let board = ["","","","","","","","",""];
let gameActive = true;
let currPlayer = "X";

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



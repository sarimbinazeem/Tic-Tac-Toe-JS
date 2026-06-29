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


function checkWinner()
{
    for(let win of winningCombos)
    {
        const [a,b,c] = win;
        if( board[a] != "" && board[a] === board[b] && board[b] === board[c])
        {
            status.innerText = `Player ${currPlayer} Wins!`;
            gameActive = false;
            return true;
        }
    }

    return false;
}

function checkDraw()
{
    if(checkWinner())
    {
        return false;
    }

    for(let cell of board)
    {
        if(cell === "")
        {
            return false;
        }
    }

    status.innerText = `Draw!`;
    gameActive = false;


    return true;
}


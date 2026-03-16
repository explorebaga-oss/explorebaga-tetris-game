const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const nextCanvas = document.getElementById("next")
const nextCtx = nextCanvas.getContext("2d")

const ROWS = 20
const COLS = 10
const SIZE = 30

let board = []

function createBoard(){

board = []

for(let r=0;r<ROWS;r++){

board[r] = []

for(let c=0;c<COLS;c++){

board[r][c] = 0

}

}

}

function drawCell(x,y,color){

ctx.fillStyle = color

ctx.fillRect(x*SIZE,y*SIZE,SIZE-1,SIZE-1)

}

function drawBoard(){

ctx.clearRect(0,0,canvas.width,canvas.height)

for(let r=0;r<ROWS;r++){

for(let c=0;c<COLS;c++){

if(board[r][c]){

drawCell(c,r,"cyan")

}

}

}

}

function startGame(){

createBoard()

drawBoard()

}

function restartGame(){

startGame()

}

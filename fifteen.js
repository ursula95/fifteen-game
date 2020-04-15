// TODO add feature get board size from user
const board = [];
const boardSize = 3;


function run() {
    init();
    drow();
    move();
    chekForWin();

}

function init() {
  let counter = boardSize * boardSize - 1;

  for(let row = 0; row < boardSize; row++) {
      board.push([]);
      for(let column = 0; column < boardSize; column++) {
          board[row][column] = counter;
          counter--;
      }
  }
}

function drow() {
    
}

function move() {

}

function chekForWin() {

}

run();
console.log(board);
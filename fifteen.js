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

  const main = document.getElementById('main');
  const boardBlock = document.createElement('div');
  boardBlock.classList.add('board');  
  main.append(boardBlock);

  for(let row = 0; row < boardSize; row++) {
    for(let column = 0; column < boardSize; column++) {
      if(board[row][column] == 0) {
        const emptyTile = document.createElement('div');
        emptyTile.classList.add('emptyTile');
        emptyTile.innerText = '0';
        boardBlock.append(emptyTile);
      } else {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerText = board[row][column];
        boardBlock.append(tile);
      }
    }
  }

  console.log(boardBlock);
}

function move() {

}

function chekForWin() {

}

run();
console.log(board);
// TODO add feature get board size from user
const board = [];
const boardSize = 3;


function run() {
    init();
    drow();   
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

function handleClick(e) {
  console.log('click', e);
  if (e.target.className === 'tile' && e.target.innerText !== '0') {
    move(Number(e.target.innerText));
  }
}

function drow() {

  const main = document.getElementById('main');
  const boardBlock = document.createElement('div');
  boardBlock.classList.add('board');  
  boardBlock.addEventListener('click', handleClick);
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

function getTileCoordinats(num) {
  for(let row = 0; row < boardSize; row++) {
    for(let column = 0; column < boardSize; column++) {
      if (board[row][column] === num)  {
        return [row, column];
      }
    }
  }  
} 

function getZeroCoordinats() {
  for(let row = 0; row < boardSize; row++) {
    for(let column = 0; column < boardSize; column++) {
      if (board[row][column] === 0)  {
        return [row, column];
      }
    }
  }  
}

function move(num) {
  const tileIndex = getTileCoordinats(num);
  const zeroIndex = getZeroCoordinats();
  console.log(tileIndex);
  console.log(zeroIndex);
}

function chekForWin() {

}

run();
console.log(board);
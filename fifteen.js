// TODO add feature get board size from user
const board = [];
let boardSize = 3;
let boardBlock;

function run() {
    askSize();
    init();
    drow();
}

function askSize() {
  let size = prompt('Select the Board size. Enter a number from 3 to 5.', 3);
  if (size >= 3 && size <= 5) {
      boardSize = size;
  } else {
    askSize();
  }
}

function init() {
  let counter = boardSize * boardSize - 1;

  for (let row = 0; row < boardSize; row++) {
      board.push([]);
      for (let column = 0; column < boardSize; column++) {
          board[row][column] = counter;
          counter--;
      }
  }
  const main = document.getElementById('main');
  boardBlock = document.createElement('div');
  
  if (boardSize == 3) {
    boardBlock.classList.add('board');
  } else if (boardSize == 4) {
    boardBlock.classList.add('boardForFour');
  } else {
    boardBlock.classList.add('boardForFive');
  }

  boardBlock.addEventListener('click', handleClick);
  main.append(boardBlock);

  console.log(board);
}

function handleClick(e) {
  console.log('click', e);
  if (e.target.className === 'tile' && e.target.innerText !== '0') {
    move(Number(e.target.innerText));
  }
}

function drow() {

  boardBlock.innerHTML = '';

  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      if (board[row][column] == 0) {
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
}

function getTileCoordinats(num) {
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      if (board[row][column] === num)  {
        return [row, column];
      }
    }
  }  
} 

function getZeroCoordinats() {
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      if (board[row][column] === 0)  {
        return [row, column];
      }
    }
  }  
}

function move(num) {
  // const tileIndex = getTileCoordinats(num);
  const [tRow, tColumn] = getTileCoordinats(num);
  
  // const zeroIndex = getZeroCoordinats();
  const [zRow, zColumn] = getZeroCoordinats();

  if ((tRow == zRow && tColumn == zColumn + 1) ||
      (tRow == zRow && tColumn == zColumn - 1) ||
      (tRow == zRow + 1 && tColumn == zColumn) ||
      (tRow == zRow - 1 && tColumn == zColumn)
    ) {
      board[tRow][tColumn] = 0;
      board[zRow][zColumn] = num;
      }
  drow();
  checkForWin();
}

function checkForWin() {
  let counter = 1;
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      if (board[row][column] == counter) {
        counter++;
        if (row == boardSize - 1 && column == boardSize - 2 && board[row][column] == 8) {
          alert("You won!");
          main.innerHTML = '';
          run();
        }
      } 
    }
  }
}

run();
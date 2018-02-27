const gridSystem = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]
let totalCount = 0;

const player1 = 1;
const player2 = 2;

let currentPlayer = player1;

function createGrid() {
  const nodeWrapper = document.getElementById('wrapper');

  for (let i = 0; i < gridSystem.length; i++) {
    let rowNode = document.createElement("div");
    rowNode.className = 'row';

    for (let j = 0; j < gridSystem[i].length; j++) {
      let columnNode = document.createElement('div');
      columnNode.className = 'column';
      columnNode.setAttribute('id', String(i)+String(j));
      rowNode.appendChild(columnNode);
    }

    nodeWrapper.appendChild(rowNode);
  }
  createHandler();
}

function createHandler() {
  var cells = document.getElementsByClassName("column");

  for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
  }
}

function createCell(row, column, chipColor) {
  let currentCell = document.getElementById(row + column);
  let newElement = document.createElement('div');
  newElement.className = chipColor;
  currentCell.appendChild(newElement);
}

function checkHorizontal(neededRow, currentPlayer) {
  for (let i = 0; i < gridSystem.length; i++) {
    if (i === neededRow) {
      for (let j = 0; j < gridSystem[i].length; j++) {
        if (gridSystem[i][j] === currentPlayer) {
          totalCount += 1;
        } else {
          totalCount = 0;
        }
        if (totalCount === 4) {
          alert('win');
          return;
        }
      }
    }
  }
  totalCount = 0;
}

function checkVertical(neededCol, currentPlayer) {
  for (let i = 0; i < gridSystem.length; i++) {
    for (let j = 0; j < gridSystem[i].length; j++) {
      if (j === neededCol) {
        if (gridSystem[i][j] === currentPlayer) {
          totalCount += 1;
        } else {
          totalCount = 0;
        }
        if (totalCount === 4) {
          alert('win');
          return;
        }
      }
    }
  }
  totalCount = 0;
}

function checkPer(neededRow, neededCol, currentPlayer) {

  // Getting the proper position started
  let startingPoint = '';
  let j = neededCol;
  for (let i = neededRow; i < gridSystem.length; i++) {
    startingPoint = String(i) + String(j);
    // console.log(startingPoint);
    j -= 1;
    if (j < 0) {break;}
  }

  // Starting from startingPoint and moving up and to the right, checking if theres a win
  let startCol = Number(startingPoint[1]);
  let startRow = Number(startingPoint[0]);

  for (let i = startRow; i > 0; i--) {
    if (startCol > gridSystem[0].length-1) {
      break;
    } else {

      if (gridSystem[i][startCol] === currentPlayer) {
        totalCount += 1;
        console.log(totalCount);
      } else {totalCount = 0;}

      if (totalCount === 4) {
        alert('win');
        return;
      }
      startCol += 1;
    }
  }
}

function checkWin(neededID, currentPlayer) {

  let neededRow = Number(neededID[0]);
  let neededCol = Number(neededID[1]);

  checkHorizontal(neededRow, currentPlayer);
  checkVertical(neededCol, currentPlayer);
  checkPer(neededRow, neededCol, currentPlayer);
}

function handleClick(event) {

  let eventID = event.target.id;
  let currentSpotId = ''

  for(let i = gridSystem.length-1; i>=0; i--) {
    for(let j=gridSystem[i].length-1; j>=0; j--) {
      if (String(j) === eventID[1]) {
        if (gridSystem[i][j] === 0) {
          if (currentPlayer === 1) {
            createCell(String(i), String(j),'redChip')
            gridSystem[i][j] = currentPlayer;
            currentSpotId = String(i) + String(j)
            checkWin(currentSpotId, currentPlayer);
            currentPlayer = player2;
            return;
          } else {
            createCell(String(i), String(j), 'blackChip')
            gridSystem[i][j] = currentPlayer;
            currentSpotId = String(i) + String(j);
            checkWin(currentSpotId, currentPlayer);
            currentPlayer = player1;
            return
          }
        }
      }
    }
  }
}

createGrid();

// Later

// See if there is an easier way transfer current player from handleClick to the different check functions

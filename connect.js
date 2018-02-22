const gridSystem = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]
// console.log(gridSystem.length)


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
}

function createHandler() {
  var cells = document.getElementsByClassName("column");

  for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
  }
}

function handleClick(event) {

  // let currentCell = document.getElementById();
  // let newElement = document.createElement('div');
  // let nodeToAppendTo = document.getElementById(event.target.id);
  // newElement.className = 'chip';
  // nodeToAppendTo.appendChild(newElement);

  for(let i = gridSystem.length-1; i>=0; i--) {
    for(let j=gridSystem[i].length-1; j>=0; j--) {
      console.log(String(j) + String(i));
      if (String(event.target.id)[0] === i) {
        // console.log(i);
      }
    }
  }
}

createGrid();
createHandler();



// Psuedo

// Nested arrays
// Loop through the arrays to create the grid system

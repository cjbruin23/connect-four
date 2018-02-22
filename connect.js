// var cells = document.getElementsByClassName("button-container");
//
// for(var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', handleClick);
// }

const gridSystem = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]

function createGrid() {
  const nodeWrapper = document.getElementById('wrapper');

  for (let i = 0; i < gridSystem.length; i++) {
    let rowNode = document.createElement("div");
    rowNode.className = 'row';

    for (let j = 0; j < gridSystem[i].length; j++) {

      let columnNode = document.createElement('div');
      columnNode.className = 'column';
      let textNode = document.createTextNode("Water");
      columnNode.appendChild(textNode);
      rowNode.appendChild(columnNode);

    }

    nodeWrapper.appendChild(rowNode);
  }
}

createGrid();


// Psuedo

// Nested arrays
// Loop through the arrays to create the grid system

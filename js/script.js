const sketchArea = document.getElementById("sketchArea");
const btn = document.querySelector("button");
// Drawing color is the first three numbers (RGB),
// Starting color is the last three numbers. Used for calculating the percentage to 0 (black)
let drawColor = [0, 0, 0, 0, 0, 0];


btn.addEventListener('click', () => {
  let amountOfSquares, acceptedAmount = false;
  while (!acceptedAmount) {
    amountOfSquares = prompt("How many squares (max 100)?", '16');
    (amountOfSquares < 100) ? acceptedAmount = true : acceptedAmount = false;
  }
  emptyDrawArea();
  drawArea(Number.parseInt(amountOfSquares))
});

function emptyDrawArea() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

// Loop through 0 Red, 1 Green and 2 Blue and assign random number
// Store color as "[i + 3]" for percentage calculating
function randomColorSelector() {
  for (let i = 0; i < 3; i++) {
    drawColor[i] = Math.floor(Math.random() * 256);
    drawColor[i + 3] = drawColor[i];
  }
}

// Change color 10% towards black
function fadeToBlack() {
  drawColor[0] = (drawColor[0] > 0) ? drawColor[0] - Math.floor(drawColor[3] * 0.1) : 0;
  drawColor[1] = (drawColor[1] > 0) ? drawColor[1] - Math.floor(drawColor[4] * 0.1) : 0;
  drawColor[2] = (drawColor[2] > 0) ? drawColor[2] - Math.floor(drawColor[5] * 0.1) : 0;
}


// Create div for sketch area
function drawArea(amountOfSquares = 16) {
  for (let i = 1; i <= amountOfSquares; i++) {
    let squareRow = document.createElement("div");
    squareRow.classList.add("flex-box");
    sketchArea.appendChild(squareRow);

    for (let j = 1; j <= amountOfSquares; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.height = `${35 / amountOfSquares}rem`;
      square.style.width = `${35 / amountOfSquares}rem`;
      squareRow.appendChild(square);
    }
  }
  randomColorSelector();
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => div.addEventListener("mouseenter", drawDiv));
}

drawArea(16);

// DrawDiv changes bg color on divs
function drawDiv() {
  this.style.backgroundColor = `rgb(${drawColor[0]}, ${drawColor[1]}, ${drawColor[2]})`;
  fadeToBlack();
}
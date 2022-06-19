const sketchArea = document.getElementById("sketchArea");
const btn = document.querySelector("button");

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
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => div.addEventListener("mouseenter", drawDiv));
}
drawArea(16);

// DrawDiv changes bg color on divs
function drawDiv() {
  this.classList.add("bg-black");
}
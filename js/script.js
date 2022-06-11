const sketchArea = document.getElementById("sketchArea");

// Create divs for sketch area
for (let i = 0; i <= 16; i++) {
  let squareRow = document.createElement("div");
  squareRow.classList.add("flex-box");
  sketchArea.appendChild(squareRow);

  for (let j = 0; j <= 16; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.height = `${35 / 16}rem`;
    square.style.width = `${35 / 16}rem`;
    squareRow.appendChild(square);
  }
}

const divs = document.querySelectorAll(".square");

// DrawDiv changes bg color on divs
function drawDiv() {
  this.classList.add("bg-black");
}

divs.forEach((div) => div.addEventListener("mouseenter", drawDiv));

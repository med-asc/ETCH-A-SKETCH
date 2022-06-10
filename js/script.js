const sketchArea = document.getElementById("sketchArea");
for (let i = 0; i <= 16; i++) {
  let squareRow = document.createElement("div");
  squareRow.classList.add("flex-box");
  sketchArea.appendChild(squareRow);

  for (let j = 0; j <= 16; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    squareRow.appendChild(square);
  }
}

const divs = document.querySelectorAll(".square");

function drawDiv(e) {
    this.classList.add("bg-black");
}

divs.forEach((div) =>
  div.addEventListener("mouseenter", drawDiv, {
    capture: false,
    once: true,
  })
);

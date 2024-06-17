function setup() {
  createCanvas(400, 400);
  background("#FFC107"); // Corrected background color format
}

function draw() {
  stroke("rgb(0,165,103)"); // Set stroke color to RGB(0,165,103)
  fill("rgb(95,2,155)"); // Set fill color to RGB(95,2,155)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35); // Draw a rectangle at the mouse position
  }
}

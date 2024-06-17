function setup() {
    createCanvas(400, 400);
    background(" #FFC107")
  }
  
  function draw() {
    stroke("rgb(0,165,103)");
    fill("rbg(95,2,155)");
  
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }

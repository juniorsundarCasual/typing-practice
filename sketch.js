function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // put setup code here
}

function draw() {
  // background(255);
  if (mouseIsPressed){
    fill(0);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    background(255);
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
  }
  // put drawing code here
}

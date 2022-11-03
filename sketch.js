let returnTags = [0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  let textArea = new p5.Element(document.getElementById("TextArea"));
  console.log(document.getElementById("TextArea"));
  textArea.position(10,10);
  textArea.size(windowWidth/2-20,windowHeight-20);
  textArea.input(myInputEvent);
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
}

function myInputEvent() {
  let last = this.value()[this.value().length-1];
  if(last == "\n"){
    returnTags.push(this.value().length);
    for (let i = 1; i < returnTags.length; i++){
      let text = this.value().slice(returnTags[i-1], returnTags[i]);
      textSize(20);
      textWrap(WORD);
      text(text, windowWidth/2+10, 20, windowWidth/2-20,windowHeight-20);
    }
  }

}
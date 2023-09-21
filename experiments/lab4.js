function setup() {
    createCanvas(innerWidth, innerHeight);
    background(200);
    x = (width - gridWidth) / 2;
    y = (height - gridHeight) / 2;
  }
  let gutter = 80;
  let gridWidth = 400;
  let gridHeight = 400;
  let x;
  let y;
  
  let rectSize = 50;
  let rectAmount = 5;
  
  function draw() {
    push();
    translate(x, y);
    for (let x = 0; x < rectAmount; x++) {
      for (let y = 0; y < rectAmount; y++) {
        push();
        if (Math.random() > 0.7) {
          translate(x * gutter, y * gutter);
          rectMode(CENTER);
          rotate(frameCount / 30);

          rect(0, 0, rectSize);
          pop();
        } else if (Math.random() < 0.4) {
          strokeWeight(7); 
        } else {
          push();
          translate(x * gutter, y * gutter);
          rotate(-frameCount / 30);
          fill("#EBA51E");
          triangle(-50, 40 ,0, -40, 50, 40);
          pop();
        }
      }
    }
    pop();
  }
  
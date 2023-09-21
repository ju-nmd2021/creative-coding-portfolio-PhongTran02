// The general concepts of the bouncing element code was inspired from https://ju.slides.com/garrit/cc-2023-complexity?token=AbjTIZo5#/5/5
class Thing {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(randomNumber(-10, 10), randomNumber(-10, 10));
    this.size = noise(this.position.x, this.position.y);
    this.color = colorPallette[Math.floor(random() * 3)];
    this.angle = 0;
  }

  update() {
    this.position.add(this.velocity);
    this.color = colorPallette[Math.floor(random() * 3)];
    this.size = noise(this.position.x / 1000, this.position.y / 1000) * 200;
    this.angle += 2;
  }

  draw() {
    push();
    fill(this.color);
    translate(this.position.x - this.size / 2, this.position.y - this.size / 2);
    rotate(this.angle); //the rotate temple, make variable then update the animation
    rect(0, 0, this.size);
    pop();
  }
}

let theThing;
let colorPallette;
let angle = 0;
let synth;
let initialize;

// The following 3 lines of code was adapted from https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/ Accessed: 2023-09-14
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
  angleMode(DEGREES);
  let color1 = color("#58A79E");
  let color2 = color("#A79E58");
  let color3 = color("#9E58A7");
  //define first and then spawn the thing
  colorPallette = [color1, color2, color3];
  theThing = new Thing(100, 100);
  synth = new Tone.MonoSynth().toDestination();
  initialize = false;
}

function textBox() {
  textSize(20);
  text("click anywhere to see the epicness!", innerWidth / 2 - 90, innerHeight / 2 - 20, 180);
}

function mouseClicked() {
  Tone.start();
  console.log("lmao");
  if (initialize === false) {
    background(200);
    initialize = true;
  }
}

function draw() {
  if (initialize) {
    theThing.draw();
    theThing.update();
    if (theThing.position.x > width || theThing.position.x < 0) {
      theThing.velocity.x *= -1;
      synth.triggerAttackRelease("F3", "8n");
    }
    if (theThing.position.y > height || theThing.position.y < 0) {
      theThing.velocity.y *= -1;
      synth.triggerAttackRelease("C4", "8n");
    }
  } else {
    textBox();
  }
}

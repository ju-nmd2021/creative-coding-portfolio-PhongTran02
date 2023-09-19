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

// The following 3 lines of code was adapted from https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/ Accessed: 2023-09-14
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
// The following 8 lines of code was adapted from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb Accessed: 2023-09-14
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(200);
  angleMode(DEGREES);
  let color1 = color(
    hexToRgb("#58A79E").r,
    hexToRgb("#58A79E").g,
    hexToRgb("#58A79E").b
  );
  let color2 = color(
    hexToRgb("#A79E58").r,
    hexToRgb("#A79E58").g,
    hexToRgb("#A79E58").b
  );
  let color3 = color(
    hexToRgb("#9E58A7").r,
    hexToRgb("#9E58A7").g,
    hexToRgb("#9E58A7").b
  );
  //define first and then spawn the thing
  colorPallette = [color1, color2, color3];
  theThing = new Thing(100, 100);
  synth = new Tone.MonoSynth().toDestination();
  Tone.start();
}

function draw() {
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
}
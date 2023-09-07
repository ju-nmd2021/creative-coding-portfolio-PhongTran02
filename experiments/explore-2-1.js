class Element {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = 50;
    this.mass = 80; // Can I make the falling much faster? Increase gravity
  }
  applyForce(force) {
    let newForce = force.copy();
    //why copy? Does it mean copy a new force vector? because it's an object, each object has its own force if you want
    newForce.div(this.mass);
    //A = F/M ? Correct
    this.acceleration.add(newForce);
    //update the acceleration from the division? Correct
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);

    this.acceleration.mult(0);
    //why multiply 0, would the acceleration vector becomes (0,0)?
    //reset it so it would not increase accerlation everytime
  }
  draw() {
    fill(0);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = 200;
    this.mass = 20;
  }

  attract(element) {
    let force = p5.Vector.sub(this.position, element.position);
    let distance = constrain(force.mag(), 5, 25);
    force.normalize();
    let m = (G * element.mass * this.mass) / (distance * distance);
    force.mult(m);
    return force;
  }

  draw() {
    fill(0);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

let element = new Element(100, 100);
let attractor = new Attractor(300, 300);
let gravity = createVector(0, 10);
const c = 1; //why c? how long you have the friction
let G = 1;

function draw() {
  background(200);

  // let friction = element.velocity.copy();
  // friction.mult(-1);
  // friction.normalize();
  // friction.mult(c); //Remove this still works, so why add c?

  let force = attractor.attract(element);

  element.applyForce(force);
  // element.applyForce(friction);
  element.applyForce(gravity);
  element.update();
  element.draw();

  attractor.draw();

  if (element.position.y > height) {
    element.position.y = height;
    element.velocity.y *= -1;
  }
}

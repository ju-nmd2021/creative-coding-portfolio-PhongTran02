// class Square {
//     constructor (x, y) {
//         this.width = x;
//         this.height = y;
//     }
//     draw() {
//         rect (this.width, this.height, 100);
//     }
//  }

// let squareSpawned = new Square (300, 200);
// function draw () {
//     background (200);
//     squareSpawned.draw();
// }

class Element {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = 100;
    this.mass = m; // Can I make the falling much faster? Increase gravity
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

let element = new Element(200, 200, 10);
let element2 = new Element(400, 0, 5);
let gravity = createVector(0, 10);
const c = 1; //why c? how long you have the friction

function draw() {
  background(200);

  let friction = element.velocity.copy();
  friction.mult(-1);
  friction.normalize();
  friction.mult(c); //Remove this still works, so why add c?

  element.applyForce(friction);
  element.applyForce(gravity);
  element.update();
  element.draw();


  element2.applyForce(friction);
  element2.applyForce(gravity);
  element2.update();
  element2.draw();

  if (element.position.y > height) {
    element.position.y = height;
    element.velocity.y *= -1;
  }
  if (element2.position.y > height) {
    element2.position.y = height;
    element2.velocity.y *= -1;
  }
}

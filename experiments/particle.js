class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.2 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);
    this.lifeSpan = 100 + Math.random() * 100;
  }

  update() {
    this.lifeSpan--;

    this.velocity.mult(0.99);
    this.position.add(this.velocity);
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    noStroke();
    fill(200, 200, 0, 1);
    ellipse(0, 0, 6);
    pop();
  }

  isDead() {
    return this.lifeSpan <= 0;
  }
}

let particles = [];

function generateParticles(x, y) {
  for (let i = 0; i < 400; i++) {
    /* Spawn a big lumps of particles,
    make a loop of 500 new constant partiocle objects
    in terms of its random position from -10 to 10, 
    then being pushed into particles array */
    const px = x + random(-10, 10);
    const py = y + random(-10, 10);
    const particle = new Particle(px, py);
    particles.push(particle);
  }
}

function draw() {
  background(0);
  blendMode(ADD);

  for (let particle of particles) { 
    /*manipulate each index inside particles array 
    to be drawn out, how it moves, and be removed*/
    particle.update();
    particle.draw();
    if (particle.isDead()) {
      particles.splice(particles.indexOf(particle), 1);
    }
  }
}

function mouseClicked() {
    generateParticles(mouseX, mouseY);
    /*activate the spawn location of the particles array */
}

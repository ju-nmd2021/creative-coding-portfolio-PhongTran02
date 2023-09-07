// let x = 100;
// let y = 100;

// let directionX = 8;
// let directionY = 5;

// function draw () {
//     clear ();
//     background (255);
    
    
//     if ( x + 50 > width || x - 50 < 0 ) {
//         directionX *= -1;
//         strokeWeight (5);
//         fill(Math.random()*255, Math.random()*255, Math.random()*255);
//     } 
//      if ( y + 50  > height || y - 50 < 0 ) {
//         directionY *= -1;
//         strokeWeight (15);
//         fill(Math.random()*255);
//     }
    
//     ellipse (x, y, 100);
//     x += directionX;
//     y += directionY;
// }
let position = createVector (100, 100 );
let velocity = createVector (3, 9 );
let acceleration = createVector (0, 0.5 );

function draw () {
    clear ();
    background (255);
    
    
    if ( position.x + 50 > width || position.x - 50 < 0 ) {
        velocity.x *= -1;
        // strokeWeight (5);
        // fill(Math.random()*255, Math.random()*255, Math.random()*255);
    } 
     if ( position.y + 50  > height || position.y - 50 < 0 ) {
        velocity.y *= -1;
        // strokeWeight (15);
        // fill(Math.random()*255);
    }
    
    ellipse (position.x, position.y, 100);

    const mouse = createVector(mouseX, mouseY); 
    //a bit confused about subtract, show the visual
    acceleration = p5.Vector.sub(mouse, position); 
    acceleration.normalize();
    acceleration.mult(0.3);//force

    velocity.add(acceleration);
    velocity.limit(15);
    position.add(velocity);
}


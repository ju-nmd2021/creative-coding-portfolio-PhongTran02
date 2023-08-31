background(255, 255, 255);

// let x = 100;
// let y = 100;
// while (x <= 500 && y <= 400) {
//     ellipse (x, y, 20);
//     x += 100;
//     y += 100;
// }

// const randomNumber = (Math.random())*100;
// const roundRandomNumber = Math.floor(randomNumber);
// console.log(roundRandomNumber);

// let gutter = 50;
// let amount = 8; 
// function draw () {  
//     for (let x = 0; x < amount; x++){
//         for (let y = 0; y < amount; y++) {
//             // ellipse (100 + x * 50, 100 + y* 50, 40);
//             push ();
//             if (Math.random() > 0.5) {
//                 push ();
//                 fill (120, 36, 189);
//                 translate (x, y);
//                 // rectMode(CENTER);
//                 rect (100 + x * gutter, 100 + y* gutter, 20);  
//                 pop ();
//             }else {
//                 ellipse (100 + x * gutter, 100 + y* gutter, 20);
//             }
//             pop();
//         }
//     }
//     noLoop ();    
// }
let gutter = 100;
let gridWidth = 400; 
let gridHeight = 400; 
let x = (width - gridWidth )/2;
let y = (height - gridHeight )/2;

let rectSize = 50;
let rectAmount = 5;

console.log(x); 
console.log(y); 
function draw () {  
push(); 
   translate (x, y);
   for ( let x = 0; x < rectAmount; x++) {
    for (let y = 0; y < rectAmount; y++) {
        push();
        if (Math.random() > 0.8) {
        translate (x * gutter, y * gutter);
        rectMode (CENTER);
        rect (0,0, rectSize);
        pop();
        } else if (Math.random () < 0.4) {
            strokeWeight (10);  
        }else {
            push ();
            fill (234, 57, 120);
            translate (x * gutter, y * gutter);
            ellipse (0, 0, 20);  
            pop ();
        }
    }
   }
   noLoop ();
pop();
}

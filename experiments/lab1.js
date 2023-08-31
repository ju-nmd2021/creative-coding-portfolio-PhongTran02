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

let gutter = 50;
let amount = 10; 
function draw () {  
    for (let x = 0; x < amount; x++){
        for (let y = 0; y < amount; y++) {
            // ellipse (100 + x * 50, 100 + y* 50, 40);
            push ();
            if (Math.random() > 0.5) {
                push ();
                fill (120, 36, 189);
                translate (x, y);
                rect (100 + x * gutter, 100 + y* gutter, 20);  
                pop ();
            }else {
                ellipse (100 + x * gutter, 100 + y* gutter, 30);
            }
            pop();
        }
    }
    noLoop ();    
}
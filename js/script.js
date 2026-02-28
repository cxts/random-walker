/**
* @description : Principle of random walker testing
*
* @author cxts
* @github https://github.com/cxts
* @date 11/03/2020
* @required CircularPath.js, setup.js, Draw.js, misc.js, Vector.js
* @param {VOID} none
* @return {VOID}
*
**/

// setup
const pi2 = Math.PI * 2;

let centerX = width / 2;
let centerY = height / 2;

// set color for path boundary
let outColor = "#FF1111";
let inColor = "#11FF11";


let cp = new CircularPath(centerX, centerY, 150, 200);


// several walkers
let walkers = [];
for(let i = 0; i < 10; i++) {
    walkers.push(new Walker(centerX, centerY, 4));
}



function drawSquareLimit() {
    ctx.save();
    ctx.strokeStyle = "#F00";
    ctx.lineWidth = 1;
    ctx.strokeRect(600, 250, 150, 135);
    ctx.restore();
}

/**
* @description : called by window.requestAniamtionFrame(), draw the entire animation on canvas
* @param NONE
* @return {VOID}
*
**/
function draw() {
    //w.walkInSquare(100, 40, 100, 100);
    // this loop accelrate the walk
    // for(let i = 0; i < 20; i++) {
    //     w.walkInCircularPath(cp);
    //     if(w.isOnCircularPath(cp)) {
    //         ctx.fillStyle = inColor;
    //     } else {
    //         ctx.fillStyle = outColor;
    //     }
    //     w.display(ctx);
    // }

    for(let w of walkers) {
        w.walkInCircularPath(cp);
        if(w.isOnCircularPath(cp)) {
            ctx.fillStyle = inColor;
        } else {
            ctx.fillStyle = outColor;
        }
        w.display(ctx);
    }
    window.requestAnimationFrame(draw);
}


// display the circular path in white
ctx.save();
ctx.strokeStyle = "#FFF";
cp.display(ctx);
ctx.restore();

window.requestAnimationFrame(draw);

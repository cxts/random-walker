/**
* @description : class CircularPath. Constrains the random walker on a circular path
*
* @author cxts
* @github https://github.com/cxts
* @date 11/03/2020
* @required none
* @param {NUMBER} centerX : x coordinate of the center of the circular path to be set
* @param {NUMBER} centerY : y coordinate of the center of the circular path to be set
* @param {NUMBER} minRadius : the radius of the inner circle of the path
* @param {NUMBER} maxRadius : the radius of the outer circle of the path (maxRadius - minRadius = thickness of the path)
* @return {VOID} an object that represent a circular zone and return if or not it contains a given position 
*
**/
class CircularPath {
    centerX;
    centerY;
    minRadius;
    maxRadius;
    TWO_PI = Math.PI * 2;
    angle = this.TWO_PI / 360;

    constructor(centerX, centerY, minRadius, maxRadius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
    }
}

// check if (x,y) are below the inner limit by comparing the norm of the vector
// ( with origin at center of the circularPath and end at point (x,y) passed in args )
// and the minRadius
CircularPath.prototype.innerContains = function(x, y) {
    let x_ = x - this.centerX;
    let y_ = y - this.centerY;
    let norm = Math.sqrt(Math.pow(x_, 2) + Math.pow(y_, 2));
    return norm >= this.minRadius;

}

// check if (x,y) are beyond the outer limit by comparing the norm of the vector
// ( with origin at center of the circularPath and end at point (x,y) passed in args )
// and the maxRadius
CircularPath.prototype.outerContains = function(x, y) {
    let x_ = x - this.centerX;
    let y_ = y - this.centerY;
    let norm = Math.sqrt(Math.pow(x_, 2) + Math.pow(y_, 2));
    return norm <= this.maxRadius;
}

// display the innner and outer limits of the path
CircularPath.prototype.display = function(ctx) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.minRadius, 0, this.TWO_PI);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.maxRadius, 0, this.TWO_PI);
    ctx.closePath();
    ctx.stroke();
}

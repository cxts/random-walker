/**
* @description : class Walker
*
* @author cxts
* @github https://github.com/cxts
* @date DATE
* @required REQUIRED CLASSES
* @param {NUMBER} x : value of x position of the walker
* @param {NUMBER} y : value of y position of the walker
* @param {NUMBER} step : size of step done by the walker per animation frame
* @return {VOID} a "random walker", a point that randomly move on the canvas
*
**/
class Walker {
	x;
	y;
	step;
	lastMove;
	constructor(x, y, step = 2) {
		this.x = x;
		this.y = y;
		this.step = step;
	}
}

// randomly choosing the next direction
Walker.prototype.getRandom = function(min, max) {
	if(max == null) {
		max = min;
		min = 0;
	}
		min = Math.ceil(min);
        max = max | 0;
        return ((Math.random() * (max - min + 1)) | 0) + min;
}

// make the walker move
Walker.prototype.walk = function() {
	let dir = this.getRandom(3);
	switch (dir) {
		case 0:
  			// walker goes left
			this.x -= this.step;
			break;
		case 1:
			// walker goes up
			this.y -= this.step;
			break;
		case 2:
			// walker goes right
			this.x += this.step;
			break;
		case 3:
			// walker goes down
			this.y += this.step;
			break;
		default:
			break;
	}
}

// never do the same move twice a row
Walker.prototype.walkNoBis = function() {
	let dir = this.getRandom(3);
	if(this.lastMove != null) {
		do {
			dir = this.getRandom(3);
		} while (this.lastMove == dir);
	}
	this.latsMove = dir;
	switch (dir) {
		case 0:
  			// walker goes left
			this.x -= this.step;
			break;
		case 1:
			// walker goes up
			this.y -= this.step;
			break;
		case 2:
			// walker goes right
			this.x += this.step;
			break;
		case 3:
			// walker goes down
			this.y += this.step;
			break;
		default:
			break;
	}
}


Walker.prototype.walkInSquare = function(x, y, width, height) {
	let dir = this.getRandom(3);
	switch (dir) {
		case 0:
			// walker goes left
			this.x -= this.step;
			if(this.x < x) {
				this.x *= -1;
			}
			break;
		case 1:
			// walker goes up
			this.y -= this.step;
			if(this.y < y) {
				this.y *= -1;
			}
			break;
		case 2:
			// walker goes right
			this.x += this.step;
			if(this.x > width + x) {
				this.x *= -1;
			}
			break;
		case 3:
			// walker goes down
			this.y += this.step;
			if(this.y > height + y) {
				this.y *= -1;
			}
			break;
		default:
			break;
	}
}

Walker.prototype.walkInCircularPath = function(circularPath) {
	let dir = this.getRandom(3);
	let way = 1;
	/*
	* In this switch, x and y position have to be considered in regards
	* of center x and y position and the limits of the given path.
	* The increment or decrement of x or y depends on x and y location
	* on the circle, i.e. in witch quarter it walks.
	*/
	switch (dir) {
		case 0:
			// walker goes left
			if(!circularPath.innerContains(this.x, this.y)) {
				if(this.x > circularPath.centerX) {
					way *= -1;
				}
			}
			if(!circularPath.outerContains(this.x, this.y)) {
				if(this.x < circularPath.centerX) {
					way *= -1;
				}
			}
			this.x -= (this.step * way);
			break;
		case 1:
			// walker goes up
			if(!circularPath.innerContains(this.x, this.y)) {
				if(this.y > circularPath.centerY) {
					way *= -1;
				}
			}
			if(!circularPath.outerContains(this.x, this.y)) {
				if(this.y < circularPath.centerY) {
					way *= -1;
				}
			}
			this.y -= (this.step * way);
			break;
		case 2:
			// walker goes right
			if(!circularPath.innerContains(this.x, this.y)) {
				if(this.x < circularPath.centerX) {
					way *= -1;
				}
			}
			if(!circularPath.outerContains(this.x, this.y)) {
				if(this.x > circularPath.centerX) {
					way *= -1;
				}
			}
			this.x += (this.step * way);
			break;
		case 3:
			// walker goes up
			if(!circularPath.innerContains(this.x, this.y)) {
				if(this.y < circularPath.centerY) {
					way *= -1;
				}
			}
			if(!circularPath.outerContains(this.x, this.y)) {
				if(this.y > circularPath.centerY) {
					way *= -1;
				}
			}
			this.y += (this.step * way);
			break;
		default:
			break;
	}
}

// check if the walker is or not on the circular path
Walker.prototype.isOnCircularPath = function(circularPath) {
	return circularPath.innerContains(this.x, this.y) && circularPath.outerContains(this.x, this.y);
}

Walker.prototype.display = function(ctx) {
	ctx.fillRect(this.x, this.y, 2, 2)
}

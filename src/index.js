const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Set line width

var radius = 10;
var WIDTH = 31;
var LENGTH = 50;
var start_center_x = 20;
var start_center_y = 20;
var diameterFactor = 0.5;
for (var i = 0; i < WIDTH; i++) {
	for(var j = 0; j < LENGTH; j++){
		var result = Math.pow(i - WIDTH / 2.0, 2) / Math.pow(diameterFactor * WIDTH, 2);
        result += Math.pow(j - LENGTH / 2.0, 2) / Math.pow(diameterFactor * LENGTH, 2);
        if(result <=1.0){
        	var center_x = start_center_x;
        	var center_y = start_center_y;
			var hexagon = new Hexagon(center_x ,center_y);
			hexagon.setCorners();
			ctx.beginPath();
			hexagon.corners.forEach( function(element, index) {
				// statements
				if(index === 0){
					ctx.moveTo(element.x, element.y);
				} else{
					ctx.lineTo(element.x, element.y);
				}
			});
			if(j < LENGTH/ 5 || j > 4 * LENGTH/5){
				ctx.fillStyle = "#decc21"
			} else{
				ctx.fillStyle = "#0bb526"
			}

			ctx.closePath();
			ctx.fill();
        }
        start_center_x += radius*2;
	}
	start_center_x = i%2===0? 20:10;
	start_center_y +=20;
}

function setCorners(){
	this.corners.push({	x: radius * Math.cos(Math.PI / 6.0) + this.x,
						y: radius / 2.0 + this.y});
	this.corners.push({	x: this.x, 
						y: 	this.y + radius});
	this.corners.push({	x: -radius * Math.cos(Math.PI / 6.0) + this.x,
						y:  this.y + radius / 2.0});
	this.corners.push({	x: -radius * Math.cos(Math.PI / 6.0) + this.x,
						y:  this.y - radius / 2.0});
	this.corners.push({	x: this.x, 
						y: this.y - radius});
	this.corners.push({	x: radius * Math.cos(Math.PI / 6.0) + this.x,
						y:  this.y - radius / 2.0});
}

function Hexagon(x, y){
	this.x = x;
	this.y = y;
	this.corners = [];
	this.setCorners = setCorners;
}
// ctx.lineWidth = 10;

// // Wall
// ctx.strokeRect(75, 140, 150, 110);

// // Door
// ctx.fillRect(130, 190, 40, 60);

// // Roof
// ctx.moveTo(50, 140);
// ctx.lineTo(150, 60);
// ctx.lineTo(250, 140);
// ctx.closePath();
// ctx.stroke();

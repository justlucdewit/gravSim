// getting canvas objects
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const tcanvas = document.getElementById("trails");
const tctx = tcanvas.getContext("2d");

// genaral constants
const G = 1;
const trailSize = 2

// set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
tcanvas.width = window.innerWidth;
tcanvas.height = window.innerHeight;

let bodies = [];
let starCount = 0;

const drawBackground = () => {
	ctx.fillStyle = "Black";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
};

const createNewBody = (position, velocity, mass, radius, color) => {
	bodies.push(new Body(position, velocity, mass, radius, color, starCount));
	starCount++;
}

createNewBody({x:900, y:460}, {x:0, y:0}, 500, 10, "yellow");
createNewBody({x:1300, y:460}, {x:0, y:0.5}, 0.1, 10, "green");
createNewBody({x:500, y:460}, {x:0, y:-0.5}, 0.1, 10, "blue");
createNewBody({x:900, y:860}, {x:-0.5, y:0}, 0.1, 10, "red");
createNewBody({x:900, y:60}, {x:0.5, y:0}, 0.1, 10, "pink");

const loop = () => {
	drawBackground();
	for (body of bodies){
		body.draw();
		body.update();
	}
	window.requestAnimationFrame(loop);
};

loop();
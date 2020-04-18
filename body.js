class Body{
	constructor(postition, velocity, mass, radius, color, id){
		this.mass = mass
		this.pos = postition;
		this.vel = velocity;
		this.rad = radius;
		this.col = color;
		this.id = id;
	}

	draw(){
		ctx.fillStyle = this.col;
		tctx.fillStyle = this.col;

		ctx.beginPath();
		tctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.rad, 0, Math.PI*2);
		tctx.arc(this.pos.x, this.pos.y, trailSize, 0, Math.PI*2);
		tctx.fill();
		ctx.fill();
	}

	update(){
		// apply velocity
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;

		// apply gravity
		bodies.forEach((body) => {
			if (body.id != this.id){
				let dx = body.pos.x - this.pos.x;
				let dy = body.pos.y - this.pos.y;
				const len = vecLen(dx, dy);
				const f = G*((this.mass * body.mass)/(len**2))/this.mass;
				dx = dx / len * f;
				dy = dy / len * f;
				this.vel.x += dx;
				this.vel.y += dy;
			}
		});
	}
}
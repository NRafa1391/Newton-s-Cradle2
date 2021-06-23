class bob {
	constructor(x, y) {
		var options={
			'isStatic':false,
			'restitution':0.3,
			'density':0.5,
			'friction':0.1

		}
		this.body = Bodies.circle(x, y, 35, options);
		this.radius = 35;
		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		ellipse(pos.x, pos.y, this.radius*2);
		
	}
}
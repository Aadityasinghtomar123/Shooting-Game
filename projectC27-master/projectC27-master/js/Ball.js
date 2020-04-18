class Ball {
    constructor(x,y,radius) {
      var options = {
          frictionAir: 0.01,
          friction: 0.5,
          frictionStatic: 1,
          gravity: 0.8,
          //inertia: Infinity,
          restitution: 0.8
      };
      this.body = Matter.Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.radius = radius;
      this.image = bomb;
     
    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(255);
      stroke(0);
      imageMode(CENTER);
      image(this.image,0,0,this.radius*2,this.radius*8/3);
      pop();
    }
  }
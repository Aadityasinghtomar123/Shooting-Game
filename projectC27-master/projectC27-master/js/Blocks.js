class Block {
    constructor(x, y) {
      var options = {
        "density" :   1.5,
        "friction" : 1.0,
        "restitution" : 0.8,
        "frictionAir":0.06
      }
      this.body  = Bodies.rectangle(x,y,80,80,options);
      World.add(world, this.body)
    };
  
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(255);
      stroke(0);
      rectMode(CENTER);
      rect(0,0,80,80);
      pop();
    };
  };
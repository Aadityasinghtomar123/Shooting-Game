class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    };
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.w = width;
    this.h = height;
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }
}
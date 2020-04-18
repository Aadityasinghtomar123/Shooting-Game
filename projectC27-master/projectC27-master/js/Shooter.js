class Shooter {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.w = width;
        this.h = height;
        angleMode(DEGREES);
        this.body.angle = -60;
      }
  
      display(){
        // Draw the shooter the way you like.
        // You could also use an image if you want a specific look
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y-30);
        angleMode(DEGREES);
        rotate(angle);
        fill(255);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,120,28);
        pop();
      };
  }
  
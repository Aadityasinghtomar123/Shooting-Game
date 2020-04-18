class Tanker {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.w = width;
        this.h = height;
      }
  
      display(){
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y)
        fill(255);
        stroke(0);
        ellipseMode(CENTER);
        ellipse(0,-30,80);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        rect(0, -20, this.w, this.h);
        pop();
      };
  }
  
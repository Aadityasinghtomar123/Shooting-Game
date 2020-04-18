class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: {
                x: pointB.x,
                y: pointB.y
            },
            stiffness: 0.03,
            length: 6
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        if(body.position.y>height){
            this.sling.bodyA = body;
        }
    }

    shoot(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyB){
            push();
            stroke(0);
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
            pop();
        }
    }

}
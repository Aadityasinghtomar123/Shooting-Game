
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine,world;

var ground, ball;
var bomb;
var constraint;



function preload(){
    bomb = loadImage('assets/canonBall.png');
}

function setup() {
    
    createCanvas(2000,880);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height-10,width,20);
    shooter = new Shooter(300,850,100,20);
    tanker = new Tanker(300,850,200,20);
    ball = new Ball(300,300,15);
    constraint = new ShootBall(ball.body,{x: 100,y: 100});
    b1 = new Block(1500,100);
    b2 = new Block(1500,200);
    b3 = new Block(1500,250);
    b4 = new Block(1500,300);
    b5 = new Block(1420,400);
    b6 = new Block(1420,350);
    b7 = new Block(1420,200);
    
}

function draw() {

    background(255);
    Engine.update(engine);
    if(!(constraint.sling.bodyA)){
        ball.display();
    }
    shooter.display();
    noStroke();
    fill(255);
    rect(10,305,80,75);
    ground.display();
    tanker.display();
    constraint.display();
    b1.display();
    b2.display();    
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    if(constraint.sling.bodyA){
        ball.body.position = {
            x: 300, y: 850
        };
    }
    
    if(shooter.body.angle == 0){
        constraint.sling.pointB = {
            x: 700, y: 600
        };
        
    } else if(shooter.body.angle == -30){
        constraint.sling.pointB = {
            x: 400, y: 700
        };
    } else if(shooter.body.angle == -60){
        constraint.sling.pointB = {
            x: 390, y: 700
        };
    } else if(shooter.body.angle == -90){
        constraint.sling.pointB = {
            x: 295 , y: 700
        };
    }
    
    constraint.attach(ball.body);
    //line(ball.body.position.x,ball.body.position.y,constraint.sling.pointB.x, constraint.sling.pointB.y);

}

function keyPressed() {
    angleMode(DEGREES)
    if(keyCode === UP_ARROW && shooter.body.angle>-70){
        shooter.body.angle=shooter.body.angle-30;
    } else
    if(keyCode === DOWN_ARROW && shooter.body.angle<0){
        shooter.body.angle=shooter.body.angle+30;
    }
    if(keyCode === 32){
        constraint.shoot();
    }
    
}

function keyReleased() {
    // Call the shoot method for the cannon.
    
}

/*function mouseDragged() {
    // Control the Ball with the mouse.
    if(mouseX<ball.body.position.x+100 && mouseY<ball.body.position.y+100){
        ball.body.position.x = mouseX;
        ball.body.position.y = mouseY;
    }
}

function mouseReleased() {
    constraint.shoot();
}*/

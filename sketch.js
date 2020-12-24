var ground;
var bob1,bob2,bob3,bob4,bob5;
var SlingShot1,SlingShot2,SlingShot3,SlingShot4,SlingShot5;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
 

  engine = Engine.create();
  world = engine.world;

  bob1 = new Ball (270,200,20,30);
  bob2 = new Ball (300,200,20,30);
  bob3 = new Ball (330,200,20,30);
  bob4 = new Ball (360,200,20,30);
  bob5 = new Ball (390,200,20,30);


 

  ground = new  Ground(400,100,300,30);


 

SlingShot1 = new Slingshot(bob1.body,{x:270,y:100});
SlingShot2 = new Slingshot(bob2.body,{x:300,y:100});
SlingShot3 = new Slingshot(bob3.body,{x:330,y:100});
SlingShot4 = new Slingshot(bob4.body,{x:360,y:100});
SlingShot5 = new Slingshot(bob5.body,{x:390,y:100});
} 

function draw() {
  background(255,255,255);
Engine.update(engine)



ground.display()



bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()



SlingShot1.display()
SlingShot2.display()
SlingShot3.display()
SlingShot4.display()
SlingShot5.display()
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:270,y:200})
  
  }}




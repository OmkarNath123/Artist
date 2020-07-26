const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var  database;
var  form,artist;



function setup(){
  background="blue"
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  ball= Bodies.circle(mouseX,mouseY,10);
  World.add(world,ball);
}

function draw(){
  ellipseMode(RADIUS);
 //ellipse(mouseX,mouseY,10,10);
 strokeWeight(10)
  point(mouseX,mouseY)
}
function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
  }

  function mousePressed(){
     Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
   }
 function mouseReleased(){
   ball.x=mouseX;
   ball.y=mouseY;
   background="white"
 }

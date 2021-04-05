
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	crumpledpaper=new Paper();
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  fill("black")
  textSize(50);
  text("Press UP Arrow key to clean your dirty screen :)",80,200);
   groundObject.display();
   dustbinObj.display();
   crumpledpaper.display();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:80,y:-75});
  }

}


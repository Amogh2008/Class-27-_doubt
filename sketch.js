
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,350,200,20);
	
	bob1 = new Bob(400,500,20);
	rope = new Rope(bob1.body, roof.body);




	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof.display();
  bob1.display();
  rope.display();
  
  
  drawSprites();
 
}




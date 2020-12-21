
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;
var ball1, ball2, ball3, ball4, ball5;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bar = createSprite(400, 100, 600, 40);

	Engine.run(engine);

	ball1 = new Ball(200, 350, 100, 100);
	ball2 = new Ball(300, 350, 100, 100);
	ball3 = new Ball(400, 350, 100, 100);
	ball4 = new Ball(500, 350, 100, 100);
	ball5 = new Ball(600, 350, 100, 100);

	string1 = new String(ball1.body,{x:200, y:120});
	string2 = new String(ball2.body,{x:300, y:120});
	string3 = new String(ball3.body,{x:400, y:120});
	string4 = new String(ball4.body,{x:500, y:120});
	string5 = new String(ball5.body,{x:600, y:120});
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}



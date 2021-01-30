
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function setup() {
	createCanvas(1200,500);

	
	engine = Engine.create();
	world = engine.world;
	hammer1 = new Hammer(100,100);
	ground1 = new Ground(600,height,1200,20)
  rubber1 = new Rubber(1000,480)
  sand1 = new Sand(100,480)
  sand2 = new Sand(130,480)
  sand3 = new Sand(160,480)
  sand4 = new Sand(190,480)
  stone1 = new Stone(500,480)
  iron1 = new Iron(700,480)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  Engine.update(engine);
  hammer1.display();
  ground1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  stone1.display();
  iron1.display();
  drawSprites();
 
}




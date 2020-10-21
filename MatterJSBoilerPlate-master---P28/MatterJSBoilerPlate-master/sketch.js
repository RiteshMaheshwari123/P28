
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Costraint = Matter.Costraint

var boy_image,boy;
var ground,stone,tree,mango1,mango2,mango3,mango4;


function preload()
{
	boy_image = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(400,735,50,50)
	boy.addImage("boy_standing",boy_image);
	boy.scale = 0.1

	ground = new Ground(600,800,1200,5);
	stone = new Stone(350,670,50,50)
	tree = new Tree (900,400,100,200);
	mango1 = new Mango(900,700,50,50)
	mango3 = new Mango(920,700,50,50)
	mango2 = new Mango(940,750,50,50)
	mango1 = new Mango(890,720,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
}




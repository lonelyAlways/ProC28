
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

var engine,world;
var boy,stone,tree,mango;
function preload()
{
	boyOp=loadImage("sprite/boy.png");
	MangoOp=loadImage("sprite/mango.png");
	StoneOp=loadImage("sprite/stone.png");
	TreeOp=loadImage("sprite/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(stone.body,{x:200, y:500});
	stone = new Stone(200,500);
	tree = new Tree(650,350);
	mango = new Mango()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===32){
	Mater.Body.setPosition(stone.body,{x:235,y:420})
	launchObject.attach(stone.body)
}
}

function detecollision(lstone,lmango){
mangoBodyPosition=lmango.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if( distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){


}
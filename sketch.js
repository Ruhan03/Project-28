
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
// create mango class
var boyImage
var stone,ground
var slingShot
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var tree;

function preload()
{
 boyImage = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	// boy = createSprite(200,600,20,20);
	// boy.addImage(boyImage)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(200,550,40)
	ground = new Ground(400,650,800,10)
	slingshot = new SlingShot(stone.body,{x:225,y:580})
	tree = new Tree(680,500,300,400);
	mango1 = new Mango(580,480,30,30)
	mango2 = new Mango(690,460,40,30)
	mango3 = new Mango(730,380,30,30)
	mango4 = new Mango(750,430,30,30)
	mango5 = new Mango(720,450,30,30)
	mango6 = new Mango(640,490,30,30)
	mango7 = new Mango(610,420,30,30)
	mango8 = new Mango(660,400,30,30)
	mango9 = new Mango(790,470,30,30)
	Engine.run(engine);
  
}


function draw() {
	text("x: "+mouseX+","+mouseY,mouseX,mouseY);
  rectMode(CENTER);
  background(255)
  image(boyImage,200,540,150,150)
  ground.display();
  slingshot.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
//   drawSprites();
 // code is not working
 //it 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:225,y:550})
		slingshot.attach(stone.body)
	}
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}//i was been joined since you left the meeting of goole meet




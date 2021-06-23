
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(400, 500);
	bob2 = new bob(470, 500)
	bob3 = new bob(330, 500);
	bob4 = new bob(540, 500);
	bob5 = new bob(260, 500);

	roof = new Roof(400, 200, 400, 50);
	str1= new String(bob1.body,{x:400,y:200})
	str2= new String(bob2.body,{x:470,y:200})
	str3= new String(bob3.body,{x:330,y:200})
	str4= new String(bob4.body,{x:540,y:200})
	str5= new String(bob5.body,{x:260,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#c0c0c0");

  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  str1.display();
  str2.display();
  str3.display();
  str4.display();
  str5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-100, y:-6})
	}
}


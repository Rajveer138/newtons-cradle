var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,bob1,bob2,bob3,bob4,bob5,RoofOb;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	bob1=new Bob(160,600,200);
	bob2=new Bob(210,700,200);
	bob3=new Bob(270,700,200);
	bob4=new Bob(320,700,200);
	bob5=new Bob(370,700,200);
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    
	rope1 = new Rope(bob1.body,RoofOb.body,-bob1.Diameter*2,0);
	rope2 = new Rope(bob2.body,RoofOb.body,-bob2.Diameter*2,0);
	rope3 = new Rope(bob3.body,RoofOb.body,-bob3.Diameter*2,0);
	rope4 = new Rope(bob4.body,RoofOb.body,-bob4.Diameter*2,0);
	rope5 = new Rope(bob5.body,RoofOb.body,-bob5.Diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




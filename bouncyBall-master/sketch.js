const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
function setup()
{
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var opt =
    {
        isStatic : true
    }
    ground = Bodies.rectangle(200,390,400,20, opt);
    World.add(world,ground);
  
}

function draw()
{
    background(0);

    Engine.update(engine);

    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,400,20);

   
}
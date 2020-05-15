const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
function setup() {
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20)
     rectangle_1= new Tanker(80,369,100,20)
     rectangle_2= new Tanker(80,351,100,15)
     rectangle_3= new Tanker(139,325,30,20)
    

}

function draw() {
    background(225)
    ellipse(80,330,93,69)
    ellipse(200,200,20,20)
    ellipse(300,300,20,20)
    ellipse(370,370,20,20)
    ground.display();
    rectangle_1.display();
    rectangle_2.display();
    rectangle_3.display();

}



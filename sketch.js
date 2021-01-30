const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper,dustbinImage,dustbinImageSprite;
function preload(){
  dustbinImage=loadImage("dustbingreen.png");
}
function setup() {
  createCanvas(769, 500);
  rectMode(CENTER);


  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(689, 419.2, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 420, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);

  dustbinImageSprite=createSprite(689,440);
  dustbinImageSprite.addImage(dustbinImage)
  dustbinImageSprite.scale=0.5;
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text("This is small game that will teach you the importance of throwing away your trash.Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background("grey");
    dustbin.display();
    paper.display();

  }
  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -15
    });
  }
}
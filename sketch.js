var garden, rabbit;
var gardenImg, rabbitImg, appleImg, leafImg; 
var applesGroup, leavesGroup;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png"); 
  leafImg = loadImage("leaf.png"); 
}

function setup() {
  createCanvas(400, 400);

  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  applesGroup = new Group();
  leavesGroup = new Group();
}

function draw() {
  background(0);

  rabbit.x = mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);

  if (frameCount % 80 === 0) {
    createApples();
    createLeaves();
  }

  drawSprites();

  for (var i = 0; i < applesGroup.length; i++) {
    if (applesGroup.get(i).y > height) {
      applesGroup.get(i).destroy();
    }
  }

  for (var j = 0; j < leavesGroup.length; j++) {
    if (leavesGroup.get(j).y > height) {
      leavesGroup.get(j).destroy();
    }
  }
}

function createApples() {
  var apple = createSprite(random(50, 350), 40, 10, 10);
  apple.velocityY = 3;
  apple.lifetime = 150;
  apple.addImage(appleImg); 
  apple.scale = 0.05;
  applesGroup.add(apple);
}

function createLeaves() {
  var leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.velocityY = 3;
  leaf.lifetime = 150;
  leaf.addImage(leafImg); 
  leaf.scale = 0.05; 
  leavesGroup.add(leaf);
}
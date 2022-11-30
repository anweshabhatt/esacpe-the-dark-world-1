var bgImage, bunny1, bunny2
var gardenImage
var barrierImage

function preload(){
  bgImage = loadImage ("./assets/Horror image.jpg")
  bunnyImage = loadImage("./assets/bunny 1 image.png")
  gardenImage = loadImage("./assets/Garden image.jpg")
  barrierImage = loadImage("./assets/Hurdle Barrier Obstacle.png")
  bunny2Image = loadImage("./assets/Bunny image.png")
}

function setup(){
 createCanvas(windowWidth,windowHeight);
bunny = createSprite(75,height-80,20,20)
bunny.addImage(bunnyImage);
bunny.scale = 0.4;
}

function draw (){
  background(bgImage);
  

  drawSprites()
}

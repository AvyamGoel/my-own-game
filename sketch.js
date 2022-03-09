var bgimg,bg
var naruto,narutoimg


function preload(){
bgimg = loadAnimation("bg.gif");
narutoimg = loadAnimation("naruto.gif");
}

function setup(){
  createCanvas(1100,600)
  bg = createSprite(550,300,1100,600);
  bg.addAnimation("moving", bgimg)
  bg.scale = 1.15;

  naruto = createSprite(85,370,10,10)
  naruto.addAnimation("running", narutoimg)
  naruto.scale = 0.45;
}

function draw(){
 background("cyan");

 if (keyDown(UP_ARROW)){
    naruto.velocityY = -10;
 }
 naruto.velocityY = naruto.velocityY + .8;

 drawSprites();
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}
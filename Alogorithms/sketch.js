var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6;

function setup() {
  createCanvas(800,400);

  sprite1 = createSprite(400, 200, 20, 40);
  sprite2 = createSprite(300, 100, 20, 40);
  sprite3 = createSprite(700, 200, 40, 20);
  sprite4 = createSprite(10, 200, 20, 40);
  sprite5 = createSprite(400, 10, 20, 40);
  sprite6 = createSprite(400, 390, 40, 20);

  sprite1.shapeColor = "Blue";
  sprite2.shapeColor = "Blue";
  sprite3.shapeColor = "Green";
  sprite4.shapeColor = "Green";
  sprite5.shapeColor = "Pink";
  sprite6.shapeColor = "Pink";

  sprite3.velocityX = -1;
  sprite4.velocityX = 1;
  sprite5.velocityY = 2;
  sprite6.velocityY = -2;

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  sprite1.x = mouseX;
  sprite1.y = mouseY;
  
  if(sprite5.y - sprite6.y < sprite5.width/2 + sprite6.width/2
    && sprite6.y - sprite5.y < sprite5.width/2 + sprite6.width/2){
      sprite5.velocityY = sprite5.velocityY*(-1);
      sprite6.velocityY = sprite6.velocityY*(-1); 
    }

  if(sprite3.x - sprite4.x < sprite3.width/2 + sprite4.width/2
    && sprite4.x - sprite3.x < sprite3.width/2 + sprite4.width/2){
      sprite3.velocityX = sprite3.velocityX*(-1);
      sprite4.velocityX = sprite4.velocityX*(-1);
    }


  if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
    && sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2
    && sprite1.y - sprite2.y < sprite1.width/2 + sprite2.width/2
    && sprite2.y - sprite1.y < sprite1.width/2 + sprite2.width/2)
  {
    sprite1.shapeColor = "red";
    sprite2.shapeColor = "red";
  }
else
{
  sprite1.shapeColor = "Blue";
  sprite2.shapeColor = "Blue";
}
  drawSprites();
}
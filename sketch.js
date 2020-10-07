
var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 20, 50);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(230,230,230);

  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
}

function draw() {
  background(255,255,255);  
  

  if(hascollided(bullet,wall))

{

      bullet.velocityX=0;

      damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

if(damage>10)

{
  bullet.shapeColor=color(255,0,0);

}

if(damage<10)

{
  bullet.shapeColor=color(0,255,0);

}



  }
  drawSprites();
}


function hascollided(bullet,wall)

    {


      bulletRedge=bullet.x+bullet.width;
      wallLedge=wall.x;
      if(bulletRedge>=wallLedge)
      {
        return true;
      }
      return false;
    }
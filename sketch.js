
var bullet,wall,speed,weight,thikness;


function setup() {
  createCanvas(1600,800);
  bullet=createSprite(50,200,50,10)
  wall=createSprite(1200,200,thikness,height/2)
  speed=random(223,321)
  weight=random(30,52)
  thikness=random(28,83)
bullet.velocityX = speed;  
}

function draw() {
  background("black");
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
   bullet.velocityX=0;
   var deformation=0.5*weight*speed*speed/22509;
   if(deformation>180)
   {
     bullet.shapeColor=color(255,0,0);
   }
   if(deformation>180 && deformation<100){
     bullet.shapeColor=color(230,230,0);
   }
   if(deformation<100)
    {
      bullet.shapeColor=color(0,225,0);
    }
  }  
  if (hasCollided(bullet,wall))
  {bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikness*thikness*thikness)
  }
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }  



  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
  
    
      
  drawSprites();

  
}
hasColided();
function hasCollided(bullet,wall)
{bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}

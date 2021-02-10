var ban, banIm, bangroup;
var rock, rockim, rockgroup;
var monkey, monkeyAni
var backIm
var count=0;
var backgr
var gameState= "PLAY"

function preload()
{
  banIm= loadImage("pictures/banana.png");
  rockim=loadImage("pictures/stone.png");
  backIm=loadImage("pictures/jungle.jpg");
  monkeyAni= loadAnimation("pictures/Monkey_01.png","pictures/Monkey_02.png","pictures/Monkey_03.png","pictures/Monkey_05.png","pictures/Monkey_06.png","pictures/Monkey_07.png","pictures/Monkey_08.png","pictures/Monkey_09.png","pictures/Monkey_10.png")
}

function setup()
{
  createCanvas(400, 400);
 backgr=createSprite(0,0,800,400);
  backgr.addImage(backIm);
  backgr.scale=1.5
 backgr.velocityX=-4
  

  
  ground=createSprite(0,350,800,10);           
  ground.visible= false
  monkey= createSprite(100,320,20,20);
  monkey.addAnimation("walking",monkeyAni);
  monkey.scale=0.15
  monkey.velocityY=3
  bangroup=new Group();
  rockgroup= new Group();
}

function draw() {
  background(backIm);
  
 
if(gameState==="PLAY"){
 monkey.collide(ground);
   if(keyDown("space")&& monkey.y>280) {
    monkey.velocityY = -6;
  }
  
  monkey.velocityY = monkey.velocityY + 0.15
  
  if(bangroup.isTouching(monkey)){
bangroup.destroyEach();
monkey.scale= monkey.scale + 0.01;

    count=count+3
  }
  
  if(rockgroup.isTouching(monkey)){
    
    rockgroup.destroyEach();
    monkey.scale= monkey.scale- 0.02;
    count= count- 2
  }
 
  count= count+Math.round(getFrameRate()/60);
    
  if(monkey.scale<=0.11){
    gameState= "END"
  
  }
  spawnBanana();
  spawnRock();
  
  
 drawSprites();
  
   stroke("white")
textSize(20)
  fill("white")
  text("score:"+count,camera.position.x,20);
  
   if(backgr.x<0){
    backgr.x=backgr.width/2;}

  camera.position.x= monkey.position.x
 // camera.position.y= monkey.position.y

 
}
if(gameState==="END"){
  textSize(30)
  stroke("black")
  fill("white")
  text("GAME OVER",20,200);
}
stroke("white")
textSize(20)
  fill("white")
  text("score:"+count,300,20);
  }

function spawnBanana(){
  if(frameCount%80===0){
    ban=createSprite(400,200,20,20);
    ban.velocityX=-3;
    ban.addImage(banIm);
    ban.scale=0.05
    ban.y=Math.round(random(120,200));
    ban.lifetime=120;
    bangroup.add(ban);
  }
}

function spawnRock(){
  if(frameCount%300===0){
rock=createSprite(400,300,20,20);
  rock.velocityX=-4;
    rock.addImage(rockim);
    rock.scale=0.15;
    rock.lifetime=100
    rockgroup.add(rock);
  
  }
}

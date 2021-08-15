var runner,runner_running
var ground,ground_moving

function preload(){
runner_running = loadAnimation("Runner-1.png","Runner-2.png")
ground_moving = loadImage("path.png")
create=createEdgeSprites();
}
function setup(){
createCanvas(600,400)
ground= createSprite(180,230,200,10)
ground.addImage("moving",ground_moving)
ground.scale=0.8
runner= createSprite(250,350,600,10)
runner.addAnimation("running",runner_running)
runner.scale=0.05

}
function draw(){
background("white")
ground.velocityY=-4
if(ground.y<0){
ground.y=ground.width/2
}

runner.x=World.mouseX

  if(runner.x>300){
  runner.x=250
  }
if(runner.x<100){
runner.x=250
}
drawSprites()
}

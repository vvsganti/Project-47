var spaceship;
var spaceshipImage;
var boss;
var bullet;
var bulletGroup;
var bossHealth = 500;
var lock;

function preload(){
  backgroundImage = loadImage("backgroundImage.jpg")
  spaceshipImage = loadImage("spaceship.png")
  bossImage = loadImage("bossImage.png")
  bulletImage = loadImage("bullet.png")
  lockImage = loadImage("lockImage.png")
}
function setup() {
  createCanvas(1550,775)
  spaceship = createSprite(400,400)
  spaceship.addImage(spaceshipImage)
  boss = createSprite(1550/2,200)
  boss.addImage(bossImage)

  bulletGroup = new Group();
  bossFirstAttack();
}

function draw() {
  background(backgroundImage)
  
  moveSpaceship();
  shoot();
  drawSprites();
}  

function moveSpaceship(){
  if(keyDown(RIGHT_ARROW)){
    spaceship.x += 3
  }
  if(keyDown(LEFT_ARROW)){
    spaceship.x -= 3
  }
  if(keyDown(UP_ARROW)){
    spaceship.y -= 3
  }
  if(keyDown(DOWN_ARROW)){
    spaceship.y += 3
  }
}

function shoot(){
  if(keyDown("space")){
    bullet = createSprite(spaceship.x, spaceship.y)
    bullet.addImage(bulletImage)
    bulletGroup.add(bullet)
    bullet.velocityY = -7
  }
}

function bossFirstAttack() {
  if(bossHealth === 500){
    for(i = 0; i < 11; i++){
      lock = createSprite(Math.round(random(100, 1500)), Math.round(random(50, 770)), 20, 20)
      lock.scale = 0.25
      lock.addImage(lockImage)
    }
  if(lock.mouseClicked()) {
    lock.destroy();
  } 
  }
}
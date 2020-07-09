var player;
var obstacle, obs1, obs2, obs3;
var bg1, bg2, bg3, bg4, bg5, bg6;
var playerimg

function preload() {
  playerimg = loadImage("sprites/drop.jpg"); 
}
function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addImage("playerimg", playerimg);
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  
}
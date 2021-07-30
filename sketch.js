//always create variables at the top

var ball;



function setup() {
  createCanvas(400, 400);

  //create Sprites here
  ball = createSprite(200, 200, 30, 30);
  ball.shapeColor = 'yellow'

}

function draw() {
  background('green');

  //move the ball in all directions
  if (keyDown("up")) {
    ball.y = ball.y - 5;

  }
  if (keyDown("down")) {
    ball.y = ball.y + 5

  }
  if (keyDown("left")) {
    ball.x = ball.x - 5

  }
  if (keyDown("right")) {
    ball.x = ball.x + 5

  }





  drawSprites();
}





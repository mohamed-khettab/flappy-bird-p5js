let gameStarted = false;
let gameOver = false;
let movement = 2;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  birdUp = loadImage("assets/bird-up.png");
  birdMid = loadImage("assets/bird-mid.png");
  birdDown = loadImage("assets/bird-down.png");
  baseImg = loadImage("assets/base.png");
  pipeup = loadImage("assets/pipe-up.png");
  pipedown = loadImage("assets/pipe-down.png");
  gameOverImage = loadImage("assets/gameover.png");
}

function collision() {
  if (
    collideRectRect(
      bird.x - 1,
      bird.y,
      bird.w,
      bird.h,
      pipe1.x,
      pipe1.h1 - pipedown.height,
      pipedown.width,
      pipedown.height
    ) === true ||
    collideRectRect(
      bird.x - 1,
      bird.y,
      bird.w,
      bird.h,
      pipe1.x,
      pipeup.height - pipe1.h2,
      pipeup.width,
      pipeup.height
    ) === true
  ) {
    gameOver = true;
  }
  if (
    collideRectRect(
      bird.x - 1,
      bird.y,
      bird.w,
      bird.h,
      pipe2.x,
      pipe2.h1 - pipedown.height,
      pipedown.width,
      pipedown.height
    ) === true ||
    collideRectRect(
      bird.x - 1,
      bird.y,
      bird.w,
      bird.h,
      pipe2.x,
      pipeup.height - pipe2.h2,
      pipeup.width,
      pipeup.height
    ) === true
  ) {
    gameOver = true;
  }
}

function setup() {
  createCanvas(288, 450);
  bird = new Bird();
  base = new Base();
  pipe1 = new Pipe(width + pipeup.width);
  pipe2 = new Pipe(width + pipeup.width + 200);
}

function draw() {
  background(backgroundImage);
  pipe2.update();
  pipe2.show();
  pipe1.update();
  pipe1.show();
  bird.show();
  bird.update();
  base.show();
  base.update();
  collision();
}

function keyPressed() {
  if (key === " ") {
    bird.up();
    gameStarted = true;
  }
}

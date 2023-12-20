function Bird() {
  this.x = width / 4;
  this.y = height / 2;
  this.velocity = -5;
  this.endVelocity = 0;
  this.w = birdMid.width;
  this.h = birdMid.height;
  this.time = setInterval(() => this.time++, 75);
  this.s = 0;

  this.update = function () {
    if (gameStarted === true) {
      if (gameOver === false) {
        this.y += this.velocity;
        this.velocity += 0.3;
      }
      if (this.y >= base.y - this.h) {
        gameOver = true;
        this.endVelocity = 0;
        this.y = base.y - this.h;
        image(
          gameOverImage,
          width / 2 - gameOverImage.width / 2,
          height / 4 - gameOverImage.height / 2
        );
      }
    } else {
      this.y += sin(this.s);
      this.s += 0.075;
    }
    if (gameOver === true) {
      this.y += this.endVelocity;
      this.endVelocity += 0.5;
    }
  };

  this.up = function () {
    if (gameStarted === true && gameOver === false) {
      this.velocity = -5;
    }
  };

  this.show = function () {
    if (gameOver === false) {
      if (this.time % 3 === 0) {
        image(birdMid, this.x, this.y, this.w, this.h);
      } else if (this.time % 3 === 1) {
        image(birdDown, this.x, this.y, this.w, this.h);
      } else if (this.time % 3 === 2) {
        image(birdUp, this.x, this.y, this.w, this.h);
      }
    } else {
      image(birdMid, this.x, this.y, this.w, this.h);
    }
  };
}

class Pipe {
  constructor(x) {
    this.x = x;
    this.h1 = Math.floor(Math.random() * (270 - 75 + 1) + 75);
    this.h2 = width - 80 - this.h1;
  }

  show() {
    image(
      pipedown,
      this.x,
      this.h1 - pipedown.height,
      pipedown.width,
      pipedown.height
    );
    image(pipeup, this.x, pipeup.height - this.h2, pipeup.width, pipeup.height);
  }

  update() {
    if (gameStarted === true && gameOver === false) {
      this.x -= movement;
    }
    if (this.x < 0 - pipeup.width) {
      this.h1 = Math.floor(Math.random() * (270 - 75 + 1) + 75);
      this.h2 = width - 80 - this.h1;
      this.x = width + pipeup.width;
    }
  }
}

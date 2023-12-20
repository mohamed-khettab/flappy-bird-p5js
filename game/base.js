function Base() {
  this.x = 0;
  this.y = 400;

  this.update = function () {
    if (gameOver === false) {
      this.x -= movement;
      if (this.x === -48) {
        this.x = 0;
      }
    }
  };

  this.show = function () {
    image(baseImg, this.x, this.y);
  };
}

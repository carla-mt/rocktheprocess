
//This is mine
class Game {
    constructor(canvas, enemy, player, width, height, speed){
      this.canvas = ctx;
      this.enemy = enemy;
      this.player = player;
      this.width = width;
      this.height = height;
      this.speed = speed;
    }
}

//From here should be edited as I took the code from the "snake example"
_drawSnake() {
    this.ctx.fillStyle = "green";
    this.snake.body.forEach(position => {
      this.ctx.fillRect(position.column * this.maxCells, position.row * this.maxCells, 8, 8);
    });
  }

  _drawFood() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.food.column * 10, this.food.row * 10, 8, 8);
  }

  _assignControlsToKeys() {
    document.onkeyup = e => {
    document.addEventListener('', e => {
      switch (e.keyCode) {
        case 38: // arrow up
          this.snake.goUp();

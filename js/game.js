
class Game {
  constructor(ctx, player, enemy, callback) {
    this.ctx = ctx;
    this.player = player;
    this.enemy = enemy;
    this.enemies = [];
    this.interval = undefined;
    this.paused = false;
    this.gameOver = callback

  }

  update() {
    this.cleanBoard();
    this.drawPath();
    this.drawPlayer();
    this.player.desjumpPlayer();
    this.drawEnemies();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }
  }

  drawPlayer() {
    this.ctx.fillStyle = this.player.color;
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  drawPath() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 500);
    this.ctx.lineTo(1400, 500);
    this.ctx.stroke();
  }

  assignControlsToKeys() {
    document.addEventListener('keyup', e => {
      switch (e.keyCode) {
        case 32:
          this.player.jumpPlayer();
          break;
        case 80:
          this.pause();
          break;
      }
    })
  }

  cleanBoard() {
    this.ctx.clearRect(0, 0, 1400, 700);
  }

  drawEnemy() {
    this.ctx.fillStyle = this.enemy.color;
    this.ctx.fillRect(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
  }

  drawEnemies() {
    this.enemies.forEach(element => {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
      element.move();
      this.collidesWith(element);
    })
  }

  generateEnemies() {
    for (let i = 0; i < 100; i++) {
      this.enemies.push(new Enemy(i * 400));
    }
  }

  collidesWith(enemy) {
    if (this.player.x < enemy.x + enemy.width &&
      this.player.x + this.player.width > enemy.x &&
      this.player.y < enemy.y + enemy.height &&
      this.player.height + this.player.y > enemy.y) {
      this.gameOver();
    }
  }

  pause() {
    this.paused = !this.paused;
    if (this.paused) {
      window.cancelAnimationFrame(this.interval);
    } else {
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }
  }

  gameOver() {
    if (this.collidesWith) {
      printGameOver();
    };
  }


  start() {
    this.drawPlayer();
    this.drawPath();
    this.generateEnemies();
    this.assignControlsToKeys();
    this.interval = window.requestAnimationFrame(this.update.bind(this));
  }

}
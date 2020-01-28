
//This is mine
class Game {
    constructor(ctx, player, enemy) {
      this.ctx = ctx;
      this.player = player;
      this.enemy = enemy;
      this.interval = undefined;
    } 

    update() {
      this.cleanBoard();
      this.drawPath();
      this.drawPlayer();
      this.drawEnemy();
      this.enemy.move ();
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
      this.ctx.moveTo(0,500);
      this.ctx.lineTo(1400,500);
      this.ctx.stroke();
    }

    assignControlsToKeys() {
      document.addEventListener('keyup', e => {
        switch (e.keyCode) {
          case 32:
            this.player.jumpPlayer();
            this.cleanBoard();
            this.drawPath();
            this.drawEnemy();
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
    
    start() {
      this.drawPlayer();
      this.drawPath();
      this.assignControlsToKeys();
      this.drawEnemy();
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }


}

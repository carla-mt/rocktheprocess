
//This is mine
class Game {
    constructor(ctx, player) {
      this.ctx = ctx;
      this.player = player;
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
      document.addEventListener('keydown', e => {
        switch (e.keyCode) {
          case 32:
            this.cleanBoard();
            this.player.jumpPlayer();
            this.drawPath();
            break;
        }
      })
    }

    cleanBoard() {
      this.ctx.clearRect(0, 0, 1400, 700);
    }

    start() {
      this.drawPlayer();
      this.drawPath();
      this.assignControlsToKeys();
    }


}

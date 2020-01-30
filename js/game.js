
//This is mine
class Game {
  constructor(ctx, player, enemy) {
    this.ctx = ctx;
    this.player = player;
    this.enemy = enemy;
    this.enemies = [];
    this.interval = undefined;
    this.frames = 0;
  }

  update() {
    //this.frames += 1;
    this.cleanBoard();
    this.drawPath();
    this.drawPlayer();
    this.player.desjumpPlayer();
    // this.drawEnemy();
    //this.generateEnemies();
    this.drawEnemies();
    // this.enemy.move();
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
          // this.cleanBoard();
          // this.drawPath();
          // this.drawEnemy();
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
      element.move()
    })
  }


  generateEnemies() {
    for (let i = 0; i < 100; i++) {
      this.enemies.push(new Enemy(i * 1000));
    }

    // if(this.frames % 60 === 0){
    //   this.drawEnemy();
    //   this.enemy.move();
    //   console.log("funciona");
    // }
    // setInterval(() => {
    //   this.drawEnemy();{}
    //   console.log("funciona");
    // }, 1000);

    console.log(this.enemies);
    //   this = {
    //     row: Math.floor(Math.random() * this.x),
    //     column: Math.floor(Math.random() * this.y);
    //   } 
    //   this.intervalId = setInterval(this.drawEnemy.bind(this), 100);

  }

  start() {
    this.drawPlayer();
    this.drawPath();
    this.generateEnemies();
    this.assignControlsToKeys();
    //this.drawEnemy();
    this.interval = window.requestAnimationFrame(this.update.bind(this));
  }


}

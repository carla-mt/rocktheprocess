let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('rocktheprocess');
  let container = document.getElementById('container');
  let startBtn = document.getElementById('start');
  let gameOver = document.getElementById("gameover");
  let playerImage = document.getElementById("player-image");
  let floorImage = document.getElementById("floor-image");
  let enemyImage = document.getElementById("enemy-image");
  let playAgainBtn = document.getElementById('playagain');
  ctx = canvas.getContext('2d');
  startBtn.addEventListener('click', function () {
    destroyStartScreen();
    game.start();
  })
  playAgainBtn.addEventListener('click', function () {
    window.location.reload();
  })


  game = new Game(ctx, new Player(), new Enemy(0), new Bonus(0), printGameOver, playerImage, floorImage, enemyImage);

  function destroyStartScreen() {
    startscreen.style = "display: none";
    container.style = "display: block";
  }

  function printGameOver() {
    canvas.style = "display: none";
    gameOver.style = "display: block";
  }

})



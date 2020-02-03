let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('rocktheprocess');
  let container = document.getElementById('container');
  let startBtn = document.getElementById('start');
  let gameOver = document.getElementById("gameover");
  ctx = canvas.getContext('2d');
  startBtn.addEventListener('click', function () {
    destroyStartScreen();
  })

  game = new Game(ctx, new Player(), new Enemy(0), printGameOver);

  function destroyStartScreen() {
    startscreen.style = "display: none";
    container.style = "display: block";
  }

  function printGameOver() {
    canvas.style = "display: none";
    gameOver.style = "display: block";
  }

  game.start();

})



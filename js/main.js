let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('rocktheprocess');
  let startBtn = document.getElementById('start');
  ctx = canvas.getContext('2d');

  game = new Game(ctx, new Player(), new Enemy(0));

  game.start();
})

// function printGameOver() {
//   let gameOver = document.getElementById("gameover");
//   canvas.style = "display: none";
//   gameOver.style = "display: block";
// }
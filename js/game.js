
//This is mine
class Game {
    constructor(ctx){
      this.ctx = ctx;
    } 

    drawPlayer() {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(300,350,70,150);
    }

    drawPath() {
      this.ctx.beginPath();
      this.ctx.moveTo(0,500);
      this.ctx.lineTo(1400,500);
      this.ctx.stroke();
    }

    start() {
      this.drawPlayer();
      this.drawPath();
    }
}


//From here should be edited as I took the code from the "snake example"

// _drawBoard
// function drawBoard() {
//     this.ctx.fillStyle = "blue";
//     this.drawBoard.fillStyle = "red";
//     this.height = 500;
//     }
   
//_drawPlayer() {
    //this.ctx.fillStyle = "blue";
    //this.player.forEach(position => {
      //this.ctx.fillRect(position.x * this.maxCells, position.row * this.maxCells, 8, 8);
    //});
  //}

  //_draw() {
    //this.ctx.fillStyle = "red";
    //this.ctx.fillRect(this.food.column * 10, this.food.row * 10, 8, 8);
  //}

  //_assignControlsToKeys() {
    //document.onkeyup = e => {
    //document.addEventListener('', e => {
      //switch (e.keyCode) {
        //case 38: // arrow up
          //this.snake.goUp();

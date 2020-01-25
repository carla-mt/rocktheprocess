# rocktheprocess
The purpose of the game is to finish the journey so find a job. The purpose of the game is to avoid obstacles and reach the end of the road.

The game screen is a road with holes and obstacles.

The player is represented by a person that walks along the road and jump every time he sees a hole or an obstacle.
The player can use the Shift key to avoid the obstacles and the Space key to catch the lives.

The game is over when a collition is detected between the player and an obstacle.



# MVP
Game states
* Start Screen
    * Title
    * Play button
* Game Screen
    * Canvas
* Game Over Screen
    * Play again button
    * Go to start screen button


## Data structure
__main.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
const game = new Game({
    width: width
    height: height
    ctx: ctx,
    this.obstacles,
    this.player
  });
game.start();
````
__Game.js__
````
Game.drawBoard();
Game.drawPlayer();
Game.generateObstacles();
Game.gameOver();
Game.start();

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

````
__Player.js__
````
class Player {
    constructor({position = x,y}, size, direction, gravity){
        this.position = position;
        this.size = width, height;
        this.direction = direction;
        this.gravity = gravity;
    }
}
 player(){
    this.position;
    this.size;
    this.direction;
    this.gravity;
}
jump();
````
__Enemy.js__
````

class Enemy{
    constructor({position = x,y},size{height, size}){
        this position = position;
        this.size = width, height;
    }
}
enemy(){
    this.position;
    this.size;
};
moveForward();
moveFaster();
````
## Links
[RocktheprocessTrello] (https://trello.com/b/drrd36KI/carla-m-game)
[Github] (https://github.com/carla-mt/rocktheprocess) 
[GitHubPages] (https://carla-mt.github.io/rocktheprocess/.)
[Slides] (https://docs.google.com/presentation/d/1Ftld9WGu4EzrBYb5pPC6rM6HGoRI2SuAi6o3SDxnHx4/edit?usp=sharing)

class Enemy {
    constructor() {
        this.x = 600;
        this.y = 430;
        this.width = 40;
        this.height = 70;
        this.color = "red";
    }

    move (){
        this.x = this.x -1;
    }
}
    
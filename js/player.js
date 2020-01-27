class Player {
    constructor() {
        this.x = 300;
        this.y = 350;
        this.width = 70;
        this.height = 150;
        this.color = "blue";
    }

    jumpPlayer() {
        //this.y = 340;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y - 80, this.width, this.height);
    }

}
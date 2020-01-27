class Player {
    constructor() {
        this.x = 300;
        this.y = 350;
        this.width = 70;
        this.height = 150;
        this.color = "blue";
    }

    jumpPlayer() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y - 100, this.width, this.height);
        // this.setTimeout(() => {
        //     return (this.y, 2*1000);
        // }

    }

}
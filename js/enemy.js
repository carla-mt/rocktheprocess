class Enemy {
    constructor(x) {
        this.x = x + 1400;
        this.y = 450;
        this.width = 120;
        this.height = 120;
        this.color = "red";
        this.speed = 4;
    }

    move() {
        this.x = this.x - 4;
    }
}

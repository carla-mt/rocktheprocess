class Enemy {
    constructor(x) {
        this.x = x + 1400;
        this.y = 450;
        this.width = 40;
        this.height = 100;
        this.color = "red";
    }

    move() {
        this.x = this.x - 5;
    }
}

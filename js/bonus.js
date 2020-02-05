class Bonus {
    constructor(x) {
        this.x = x + 1400;
        this.y = 120;
        this.width = 50;
        this.height = 50;
        this.color = "green";
    }

    move() {
        this.x = this.x - 3;
    }
}

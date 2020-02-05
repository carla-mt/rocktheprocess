class Player {
    constructor() {
        this.x = 300;
        this.y = 420;
        this.width = 140;
        this.height = 170;
        this.color = "blue";
    }

    desjumpPlayer() {
        if (this.y >= 420) {
            this.y = 420
        } else {
            this.y = this.y + 6;
        }
    }

    jumpPlayer() {
        this.y = this.y - 420;
    }
}


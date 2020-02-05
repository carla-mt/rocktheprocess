class Player {
    constructor() {
        this.x = 300;
        this.y = 370;
        this.width = 170;
        this.height = 200;
        this.color = "blue";
    }

    desjumpPlayer() {
        if (this.y >= 370) {
            this.y = 370
        } else {
            this.y = this.y + 6;
        }
    }

    jumpPlayer() {
        this.y = this.y - 370;
    }
}


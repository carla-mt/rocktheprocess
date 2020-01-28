class Player {
    constructor() {
        this.x = 300;
        this.y = 350;
        this.width = 70;
        this.height = 150;
        this.color = "blue";
    }

    desjumpPlayer (){
        if (this.y >= 350) {
            this.y = 350
        } else {
            this.y = this.y + 2;
        }
     }
   
    jumpPlayer() {
        this.y = this.y - 180;
    } 
}

// if (this.y < 350)

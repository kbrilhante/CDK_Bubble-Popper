class Bubble {
    constructor() {
        this.r = random(15, 50);
        this.x = random(this.r, width - this.r);
        this.y = height + this.r;
        this.dx = random(-0.5, 0.5);
        this.dy = random(-3, -1);
    }
    show() {
        push();
        imageMode(CENTER);
        image(sprBubble, this.x, this.y, this.r * 2, this.r * 2)
        pop();
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        const dice = round(random(100));
        if (dice === 0) {
            this.dx *= -1;
        }
    }
    checkPop(array) {
        if (
            this.y - this.r <= 0 ||
            this.x - this.r <= 0 ||
            this.x + this.r >= width
        ) {
            this.pop(array);
        }
    }
    pop(array) {
        const i = array.indexOf(this);
        array.splice(i, 1);
    }
}
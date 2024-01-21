class Bubble {
    constructor () {
        this.r = random(15, 50);
        this.x = random(this.r, width - this.r);
        this.y = height + this.r;
        this.dx = random(-0.5, 0.5);
        this.dy = random(-3, -1);
    }
    show() {
        push();
        // ellipseMode(RADIUS);
        // fill("cyan")
        // circle(this.x, this.y, this.r);
        imageMode(CENTER);
        image(sprBubble, this.x, this.y, this.r * 2, this.r * 2)
        pop();
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;

        
    }
}
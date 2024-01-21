let sprBubble, sndPop
let bubbles;

function preload() {
    sprBubble = loadImage("./assets/BubbleSimple.png");
    sndPop = loadSound("./assets/pop.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 5);
    
    bubbles = [];
}

function draw() {
    background("#FFD2CC");

    // create a bubble
    if (frameCount % 20 === 0) {
        const bubble = new Bubble();
        bubbles.push(bubble);
    }

    for (let i = bubbles.length - 1; i >= 0; i--) {
        const bubble = bubbles[i];
        bubble.show();
        bubble.move();
        bubble.checkPop(bubbles);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        const d = dist(bubble.x, bubble.y, mouseX, mouseY);
        if (d <= bubble.r) {
            bubble.pop(bubbles);
            sndPop.play();
        }
    }
}
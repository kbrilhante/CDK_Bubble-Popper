let sprBubble, sndPop;
let bubbles, counter;

function preload() {
    sprBubble = loadImage("./assets/BubbleSimple.png");
    sndPop = loadSound("./assets/mixkit-one-clap-481.wav");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 5);
    
    bubbles = [];
    counter = 0;

    textAlign(LEFT, TOP);
    textSize(20);
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

    // write the counter
    text("Bubbles popped: " + counter, 10, 10);
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        const d = dist(bubble.x, bubble.y, mouseX, mouseY);
        if (d <= bubble.r) {
            bubble.pop(bubbles);
            sndPop.play();
            counter++;
        }
    }
}
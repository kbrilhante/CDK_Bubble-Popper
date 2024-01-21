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
    background(200);

    // create a bubble
    if (frameCount % 40 === 0) {
        const bubble = new Bubble();
        bubbles.push(bubble);
    }

    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        bubble.show();
        bubble.move();
    }
}


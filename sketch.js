let sprBubble, sndPop
let bubbles;

function preload() {
    sprBubble = loadImage("./assets/BubbleSimple.png");
    sndPop = loadSound("./assets/pop.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 5);
    
    bubbles = new Bubble();
}

function draw() {
    background(200);

    bubbles.show();
    bubbles.move();
}
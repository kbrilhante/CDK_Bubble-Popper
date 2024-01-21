let sprBubble, sndPop

function preload() {
    sprBubble = loadImage("./assets/BubbleSimple.png");
    sndPop = loadSound("./assets/pop.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 10);
}

function draw() {
    background(0);
}
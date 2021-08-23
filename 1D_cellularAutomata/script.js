let c;

function setup() {
    createCanvas(800, 800, P2D);
    //createCanvas(window.innerWidth, window.innerHeight, P2D);
    background(0);
    c = new CA();
    frameRate(10);
}

function draw() {
    //background(0);
    c.display();
    c.generate();
    c.check();
}
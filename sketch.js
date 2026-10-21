// ORUBIA - BSIT2-B

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  drawBackground();
  drawGround();

  // Flowers sway at different speeds and positions.b
  drawFlower(100, 285, 35, 3);
  drawFlower(220, 305, 45, 2);
  drawFlower(350, 280, 30, 4);
  drawFlower(490, 300, 40, 2.5);

  // Clouds move continuously across the sky.
  drawCloud((frameCount * 0.5) % 720 - 60, 75, 1);
  drawCloud((frameCount * 0.3 + 250) % 720 - 60, 110, 0.8);
  drawCloud((frameCount * 0.4 + 480) % 720 - 60, 55, 0.7);

  // Butterflies fly around the garden.
  drawButterfly(
    280 + sin(frameCount * 2) * 65,
    190 + cos(frameCount * 3) * 20
  );

  drawButterfly(
    420 + sin(frameCount * 1.5) * 35,
    150 + cos(frameCount * 2) * 25
  );
}

// Draws the sky and a sun with rotating rays.
function drawBackground() {
  background(135, 206, 250);

  noStroke();
  fill(255, 220, 70);
  circle(520, 90, 65);

  push();
  translate(520, 90);
  rotate(frameCount * 1.5);
  stroke(255, 220, 70);
  strokeWeight(3);

  for (let angle = 0; angle < 360; angle += 45) {
    line(0, 40, 0, 50);
    rotate(45);
  }
  pop();
}

// Draws the ground and grass.
function drawGround() {
  noStroke();
  fill(80, 180, 90);
  rect(0, 260, width, 140);

  stroke(45, 135, 65);
  strokeWeight(2);

  for (let x = 10; x < width; x += 25) {
    line(x, 380, x + 5, 370);
  }
}

// Calculates and returns the flower stem length.
function getStemLength(size) {
  let stemLength = size * 2.2;
  return stemLength;
}

// Draws a flower that gently sways from side to side.
function drawFlower(x, y, size, speed) {
  let stemLength = getStemLength(size);
  let sway = sin(frameCount * speed) * 8;
  let petalSize = size * 0.55;

  push();
  translate(x, y);
  rotate(sway / 4);

  // Draw the stem.
  stroke(35, 120, 55);
  strokeWeight(4);
  line(0, 0, 0, stemLength);

  // Draw the leaf.
  noStroke();
  fill(45, 160, 70);
  ellipse(-10, stemLength * 0.55, size * 0.65, size * 0.3);

  // Draw the petals.
  fill(255, 100, 160);
  for (let angle = 0; angle < 360; angle += 72) {
    let petalX = cos(angle) * size * 0.48;
    let petalY = sin(angle) * size * 0.48;
    circle(petalX, petalY, petalSize);
  }

  // Draw the flower center.
  fill(255, 210, 40);
  circle(0, 0, size * 0.45);

  pop();
}

// Draws a cloud using a position and scale factor.
function drawCloud(x, y, scaleFactor) {
  noStroke();
  fill(255);

  circle(x, y, 35 * scaleFactor);
  circle(x + 20 * scaleFactor, y - 10 * scaleFactor,
         45 * scaleFactor);
  circle(x + 45 * scaleFactor, y, 35 * scaleFactor);
  ellipse(x + 22 * scaleFactor, y + 10 * scaleFactor,
          65 * scaleFactor, 25 * scaleFactor);
}

// Draws a butterfly with flapping wings.
function drawButterfly(x, y) {
  let wingSize = 12 + abs(sin(frameCount * 12)) * 8;

  push();
  translate(x, y);
  noStroke();

  fill(255, 100, 180);
  ellipse(-wingSize / 2, -5, wingSize, 16);
  ellipse(wingSize / 2, -5, wingSize, 16);

  fill(50, 40, 70);
  ellipse(0, 0, 5, 18);
  circle(0, -10, 7);

  pop();
}

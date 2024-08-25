let circleSize = 50;
let r = 255;
let g = 0;
let b = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 0.6); // Create a canvas that fills part of the window
  canvas.parent("sketch-container"); // Attach the canvas to the div with id 'sketch-container'

  // Set up sliders and attach events
  let sizeSlider = select("#sizeSlider");
  sizeSlider.input(() => {
    circleSize = sizeSlider.value();
  });

  let colorRSlider = select("#colorR");
  colorRSlider.input(() => {
    r = colorRSlider.value();
  });

  let colorGSlider = select("#colorG");
  colorGSlider.input(() => {
    g = colorGSlider.value();
  });

  let colorBSlider = select("#colorB");
  colorBSlider.input(() => {
    b = colorBSlider.value();
  });
}

function draw() {
  background(220);
  fill(r, g, b); // Set the fill color based on the sliders
  ellipse(width / 2, height / 2, circleSize, circleSize); // Draw the circle
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.6);
}

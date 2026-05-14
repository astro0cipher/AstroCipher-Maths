const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }

  });

});


/* =========================
   HERO GRAPH ANIMATION
========================= */

const heroCanvas = document.getElementById('heroCanvas');
const heroCtx = heroCanvas.getContext('2d');

function resizeHeroCanvas() {
  heroCanvas.width = heroCanvas.offsetWidth;
  heroCanvas.height = heroCanvas.offsetHeight;
}

resizeHeroCanvas();

let heroTime = 0;

function animateHeroGraph() {

  heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

  heroCtx.strokeStyle = '#00e5ff';
  heroCtx.lineWidth = 3;
  heroCtx.shadowBlur = 25;
  heroCtx.shadowColor = '#00e5ff';

  heroCtx.beginPath();

  for (let x = 0; x < heroCanvas.width; x++) {

    const y =
      heroCanvas.height / 2 +
      Math.sin((x + heroTime) * 0.02) * 80;

    heroCtx.lineTo(x, y);
  }

  heroCtx.stroke();

  heroTime += 2;

  requestAnimationFrame(animateHeroGraph);
}

animateHeroGraph();


/* =========================
   MAIN GRAPH VISUALIZATION
========================= */

const graphCanvas = document.getElementById('graphCanvas');
const graphCtx = graphCanvas.getContext('2d');

function resizeGraphCanvas() {
  graphCanvas.width = graphCanvas.offsetWidth;
  graphCanvas.height = graphCanvas.offsetHeight;
}

resizeGraphCanvas();

let graphTime = 0;

function drawGrid() {

  graphCtx.strokeStyle = 'rgba(255,255,255,0.05)';
  graphCtx.lineWidth = 1;

  for (let x = 0; x < graphCanvas.width; x += 40) {

    graphCtx.beginPath();
    graphCtx.moveTo(x, 0);
    graphCtx.lineTo(x, graphCanvas.height);
    graphCtx.stroke();
  }

  for (let y = 0; y < graphCanvas.height; y += 40) {

    graphCtx.beginPath();
    graphCtx.moveTo(0, y);
    graphCtx.lineTo(graphCanvas.width, y);
    graphCtx.stroke();
  }
}

function drawAxis() {

  graphCtx.strokeStyle = '#00e5ff';
  graphCtx.lineWidth = 2;
  graphCtx.shadowBlur = 15;
  graphCtx.shadowColor = '#00e5ff';

  // X Axis
  graphCtx.beginPath();
  graphCtx.moveTo(0, graphCanvas.height / 2);
  graphCtx.lineTo(graphCanvas.width, graphCanvas.height / 2);
  graphCtx.stroke();

  // Y Axis
  graphCtx.beginPath();
  graphCtx.moveTo(graphCanvas.width / 2, 0);
  graphCtx.lineTo(graphCanvas.width / 2, graphCanvas.height);
  graphCtx.stroke();
}


/* =========================
   SIN FUNCTION
========================= */

function drawSinWave() {

  graphCtx.strokeStyle = '#9b5cff';
  graphCtx.lineWidth = 3;
  graphCtx.shadowBlur = 20;
  graphCtx.shadowColor = '#9b5cff';

  graphCtx.beginPath();

  for (let x = -400; x < 400; x++) {

    const y =
      Math.sin((x + graphTime) * 0.02) * 100;

    graphCtx.lineTo(
      graphCanvas.width / 2 + x,
      graphCanvas.height / 2 - y
    );
  }

  graphCtx.stroke();
}


/* =========================
   QUADRATIC FUNCTION
========================= */

function drawQuadratic() {

  graphCtx.strokeStyle = '#00e5ff';
  graphCtx.lineWidth = 2;
  graphCtx.shadowBlur = 15;
  graphCtx.shadowColor = '#00e5ff';

  graphCtx.beginPath();

  for (let x = -200; x <= 200; x++) {

    const y = (x * x) / 80;

    graphCtx.lineTo(
      graphCanvas.width / 2 + x,
      graphCanvas.height / 2 - y
    );
  }

  graphCtx.stroke();
}


/* =========================
   LOG FUNCTION
========================= */

function drawLogFunction() {

  graphCtx.strokeStyle = '#3b82f6';
  graphCtx.lineWidth = 2;
  graphCtx.shadowBlur = 15;
  graphCtx.shadowColor = '#3b82f6';

  graphCtx.beginPath();

  for (let x = 1; x < 400; x++) {

    const y = Math.log(x) * 50;

    graphCtx.lineTo(
      graphCanvas.width / 2 + x - 200,
      graphCanvas.height / 2 - y
    );
  }

  graphCtx.stroke();
}


/* =========================
   MAIN GRAPH LOOP
========================= */

function animateMainGraph() {

  graphCtx.clearRect(
    0,
    0,
    graphCanvas.width,
    graphCanvas.height
  );

  drawGrid();
  drawAxis();

  drawSinWave();
  drawQuadratic();
  drawLogFunction();

  graphTime += 1;

  requestAnimationFrame(animateMainGraph);
}

animateMainGraph();


/* =========================
   QUIZ BUTTON EFFECT
========================= */

const optionButtons = document.querySelectorAll('.options button');

optionButtons.forEach((button) => {

  button.addEventListener('click', () => {

    optionButtons.forEach((btn) => {
      btn.classList.remove('selected');
    });

    button.classList.add('selected');

  });

});


/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener('resize', () => {

  resizeHeroCanvas();
  resizeGraphCanvas();

});

const input = document.getElementById("equationInput");

plotBtn.addEventListener("click", () => {

  const equation = input.value;

  // parse equation
  // generate points
  // draw graph

});

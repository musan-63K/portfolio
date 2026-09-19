const triangle = document.getElementById("triangle");
const SPEED_STEP = 45;
const INITIAL_SPEED = 90;

let angle = 0;
let speed = INITIAL_SPEED;
let lastTime = performance.now();

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    speed += SPEED_STEP;
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    speed -= SPEED_STEP;
  }
});

function tick(now) {
  const delta = (now - lastTime) / 1000;
  lastTime = now;
  angle = (angle + speed * delta) % 360;
  triangle.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

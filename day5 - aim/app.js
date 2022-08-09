const start = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeBtns = document.querySelectorAll(".time-btn");
let time = 1;
let count = 0;
const timer = document.querySelector("#time");
const board = document.querySelector("#board");
let interval;
const colors = ["IndianRed",  "LightCoral",  "Salmon",  "DarkSalmon",  "LightSalmon",  "Crimson",  "Red",  "FireBrick",  "DarkRed", "Pink",  "LightPink",  "HotPink",  "DeepPink",  "MediumVioletRed",  "PaleVioletRed", "LightSalmon",  "Coral",  "Tomato",  "OrangeRed",  "DarkOrange",  "Orange", "Gold"]

start.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});
timeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    time = parseInt(btn.dataset.time);
    console.log(time);
    screens[1].classList.add("up");
    startGame();
  });
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    count++;
    e.target.remove();
    createCircle();
  }
});
function startGame() {
  createCircle();
  interval = setInterval(countDown, 1000);
  setTime(time);
}

function countDown() {
  let current = --time;
  if (current < 10) {
    current = "0" + current;
  }
  if (time < 0) {
    current = "00";
    clearInterval(interval);
    endGame();
  }
  console.log(current);
  setTime(current);
}
function endGame() {
  timer.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${count}</span></h1>`;
}

function setTime(time) {
  timer.innerHTML = `00:${time}`;
}
function createCircle() {
  const target = document.createElement("div");
  const size = randNumber(10, 40);
  const { width, height } = board.getBoundingClientRect();
  const x = randNumber(0, width - size);
  const y = randNumber(0, height - size);

  target.classList.add("circle");
  target.style.width = `${size}px`;
  target.style.height = `${size}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.background = `${getRandColor()}`;
  board.appendChild(target);
}

function randNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandColor() {
  const idx = Math.round(Math.random() * colors.length);
  return colors[idx];
}

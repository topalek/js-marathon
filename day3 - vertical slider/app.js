const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(dir) {
  if (dir === "up") {
    activeSlideIndex++;
    if (activeSlideIndex == 4) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * 100}%)`;
}

// Get DOM
const body = document.querySelector("body");
body.style.height = document.body.scrollHeight + "px";
console.log(body.style.height);

// Cover menu
const cover = document.querySelector(".cover");
const toggleBtn = document.querySelector(".toggleB");
const crossBtn = document.querySelector(".fa-times");

// toggle header and footer
const header = document.querySelector(".ml-header");
const mlFooter = document.querySelector(".ml-footer");

// Back to Top Button
const btt = document.querySelector("#backTopBtn");

// Cover menu button triggers
const triggers = document.querySelectorAll(".btn-trigger");

// Toggle cover
function toggleButton() {
  if (cover.classList.contains("visible")) cover.classList.remove("visible");
  else cover.classList.add("visible");
}

// swipe btn
let initialMouse = 0;
let slideMovementTotal = 0;
let mouseIsDown = false;

let slider = document.querySelector("#slider");

let timer = null;

console.log(window.scrollY + window.offsetHeight);
// console.log(document.body.scrollHeight);

// Build out functions

// control scroll delay
function scrollDelay(e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (
      window.scrollY == 0 ||
      window.scrollY + window.offsetHeight >
        document.body.scrollHeight - mlFooter.offsetTop
    ) {
      if (!mlFooter.classList.contains("scrollDone"))
        mlFooter.classList.add("scrollDone");
    }
    mlFooter.classList.toggle("scrollDone");
  }, 80);
}

// toggle header's background
function toggleBg() {
  if (window.scrollY !== 0) header.style.background = "rgba(35, 30, 27,0.8)";
  else header.style.background = "none";
  //   appearFooter();
}

// Back to TOP from anywhere you are
function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Hook up the event
toggleBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

try {
  window.addEventListener("scroll", scrollDelay, false);
  window.addEventListener("scroll", toggleBg);
} catch (e) {
  window.addEventListener("onscroll", scrollDelay);
  window.addEventListener("onscroll", toggleBg);
}

btt.addEventListener("click", backTop);

triggers.forEach((trigger) => trigger.addEventListener("click", toggleButton));

AOS.init();

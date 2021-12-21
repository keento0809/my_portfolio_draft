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

function toggleButton() {
  if (cover.classList.contains("visible")) cover.classList.remove("visible");
  else cover.classList.add("visible");
}
function toggleButton2() {
  if (cover.classList.contains("visible")) {
    cover.classList.remove("visible");
  } else {
    cover.classList.add("visible");
  }
}

toggleBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

// swipe btn
let initialMouse = 0;
let slideMovementTotal = 0;
let mouseIsDown = false;

let slider = document.querySelector("#slider");

let timer = null;

// Build out functions
function scrollDelay(e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (
      window.scrollY == 0 ||
      window.scrollY + window.offsetHeight == document.body.scrollHeight
    ) {
      if (!mlFooter.classList.contains("scrollDone"))
        mlFooter.classList.add("scrollDone");
    }
    mlFooter.classList.toggle("scrollDone");
  }, 50);
}

function toggleBg() {
  if (window.scrollY !== 0) header.style.background = "#8d8d8d";
  else header.style.background = "none";
}

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Hook up the event
try {
  window.addEventListener("scroll", scrollDelay, false);
  window.addEventListener("scroll", toggleBg);
} catch (e) {
  window.addEventListener("onscroll", scrollDelay);
  window.addEventListener("onscroll", toggleBg);
}

btt.addEventListener("click", backTop);

AOS.init();

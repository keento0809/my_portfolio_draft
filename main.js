// Get DOM

// Cover menu
const cover = document.querySelector(".cover");
const toggleBtn = document.querySelector(".toggleB");
const crossBtn = document.querySelector(".fa-times");

// toggle header and footer
const header = document.querySelector(".ml-header");
const mlFooter = document.querySelector(".ml-footer");

// scroll
const bottom = document.querySelector("#bottom");

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

// Hook up the event
try {
  window.addEventListener("scroll", scrollDelay, false);
  window.addEventListener("scroll", toggleBg);
} catch (e) {
  window.addEventListener("onscroll", scrollDelay);
  window.addEventListener("onscroll", toggleBg);
}

AOS.init();

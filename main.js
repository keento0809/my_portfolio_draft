// Get DOM
const body = document.querySelector("body");
body.style.height = document.body.scrollHeight + "px";
console.log(body.style.height);

// Cover menu
const cover = document.querySelector(".cover");

// Menu button (hamburger menu)
const menuBtn = document.querySelector(".toggleB");
const crossBtn = document.querySelector(".fa-times");

// toggle header and footer
const header = document.querySelector(".ml-header");
const mlFooter = document.querySelector(".ml-footer");

// Back to Top Button
const btt = document.querySelector("#backTopBtn");

// Cover menu button triggers
const triggers = document.querySelectorAll(".btn-trigger");

// Button switch dark and light mode (desktop ver)
const darkLight = document.querySelector("#darkLight");

// Toggle cover
function toggleButton() {
  if (cover.classList.contains("visible")) {
    header.style.display = "flex";
    cover.classList.remove("visible");
  } else {
    header.style.display = "none";
    cover.classList.add("visible");
  }
}

console.log(window.innerWidth);

// swipe btn
let initialMouse = 0;
let slideMovementTotal = 0;
let mouseIsDown = false;

let slider = document.querySelector("#slider");

let timer = null;

// Javascript event on scroll up or scroll down
let lastScrollTop = 0;

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
  //   header.style.visibility = "hidden";
  if (window.scrollY !== 0) {
    header.classList.add("opacity-c");
    header.style.background = "rgba(35, 30, 27,0.8)";
  } else {
    header.classList.remove("opacity-c");
    header.style.background = "none";
  }
  //   appearFooter();
}

// Back to TOP from anywhere you are
function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Doesn't work so far
function detectScrollUpOrDown() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    console.log("scrolling down");
    if (mlFooter.classList.contains("scrollDone"))
      mlFooter.classList.remove("scrollDone");
    // return;
  } else {
    if (mlFooter.classList.contains("scrollDone"))
      mlFooter.classList.remove("scrollDone");
    // return;
    console.log("scrolling up");
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

// Emerge back to TOP button
function emergeButton() {
  let pageTop = btt;
  // 要素の位置座標を取得
  let rect = pageTop.getBoundingClientRect();
  // topからの距離
  let scrollTop = rect.top + window.pageYOffset;

  // btn表示開始のscrollTopの位置をレスポンシブに応じて変更する
  let startEmerge = 690;
  if (window.innerWidth >= 768) startEmerge = 1310;

  if (scrollTop > startEmerge) {
    pageTop.classList.add("startShow");
  } else {
    pageTop.classList.remove("startShow");
  }
}

let isDark = true;

function changeDarkLight(e) {
  if (!isDark) {
    body.classList.remove("lightMode");
    header.classList.remove("lightMode");
    mlFooter.classList.remove("lightMode");
  } else {
    body.classList.add("lightMode");
    header.classList.add("lightMode");
    mlFooter.classList.add("lightMode");
  }
  isDark = !isDark;
  console.log(isDark);
}

// Hook up the event
menuBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

try {
  window.addEventListener("scroll", scrollDelay, false);
  window.addEventListener("scroll", toggleBg);
} catch (e) {
  window.addEventListener("onscroll", scrollDelay);
  window.addEventListener("onscroll", toggleBg);
}

btt.addEventListener("click", backTop);
window.addEventListener("scroll", emergeButton);

triggers.forEach((trigger) => trigger.addEventListener("click", toggleButton));

darkLight.addEventListener("click", changeDarkLight);

AOS.init();

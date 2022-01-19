import { header, toggleButton } from "./header.js";
import { menuBtn, crossBtn } from "./header.js";

// Get DOM
const body = document.querySelector("body");
body.style.height = document.body.scrollHeight + "px";
console.log(body.style.height);
// Back to Top Button
const btt = document.querySelector("#backTopBtn");
// page link triggers (links to each sections)
const pageLinkTriggers = document.querySelectorAll(".btn-trigger");
// global container
const globalContainer = document.querySelector("#global-container");
// Button switch dark and light mode (desktop ver)
const darkLight = document.querySelector("#darkLight");

// Define variables
// Javascript event on scroll up or scroll down
// let lastScrollTop = 0;
let isDark = true;

// Build out function
// Back to TOP from anywhere you are
function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

// switch dark mode and light mode
function changeDarkLight() {
  if (!isDark) {
    globalContainer.classList.add("lightMode");
  } else {
    globalContainer.classList.remove("lightMode");
  }
  isDark = !isDark;
}

// Hook up the event
menuBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

btt.addEventListener("click", backTop);
window.addEventListener("scroll", emergeButton);

pageLinkTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleButton)
);

darkLight.addEventListener("click", changeDarkLight);

AOS.init();

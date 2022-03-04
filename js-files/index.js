import { header, toggleButton } from "./header.js";
import { menuBtn, crossBtn } from "./header.js";
import { checkHeight } from "./main.js";
// import scroll from "./scroll";

// Get DOM
const body = document.querySelector("body");
body.style.height = document.body.scrollHeight + "px";
let allHeight = body.style.height;
console.log(allHeight);
// Back to Top Button
// const btt = document.querySelector("#backTopBtn");
// page link triggers (links to each sections)
const pageLinkTriggers = document.querySelectorAll(".btn-trigger");
// global container
const globalContainer = document.querySelector("#global-container");
// Button switch dark and light mode (desktop ver)
// const darkLight = document.querySelector("#darkLight");
// differentBg (to switch the background color)
const differentBgs = document.querySelectorAll(".differentBg");
// x-sign9
const xSign9s = document.querySelectorAll(".x-sign9");
console.log(xSign9s);

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
// function emergeButton() {
//   let pageTop = btt;
//   // 要素の位置座標を取得
//   let rect = pageTop.getBoundingClientRect();
//   // topからの距離
//   let scrollTop = rect.top + window.pageYOffset;

//   // btn表示開始のscrollTopの位置をレスポンシブに応じて変更する
//   let startEmerge = 690;
//   if (window.innerWidth >= 768) startEmerge = 1310;

//   if (scrollTop > startEmerge) {
//     pageTop.classList.add("startShow");
//   } else {
//     pageTop.classList.remove("startShow");
//   }
// }

// switch dark mode and light mode
function changeDarkLight() {
  if (!isDark) {
    globalContainer.classList.add("lightMode");
    header.classList.add("lightMode");
    // header.style.background = "rgba(254, 252, 242, 0.5)";
    xSign9s.forEach((sign) => sign.classList.add("lightMode"));
    differentBgs.forEach((div) => div.classList.add("lightMode"));
  } else {
    globalContainer.classList.remove("lightMode");
    header.classList.remove("lightMode");
    // header.style.background = "rgba(18, 14, 12)";
    xSign9s.forEach((sign) => sign.classList.remove("lightMode"));
    differentBgs.forEach((div) => div.classList.remove("lightMode"));
  }
  isDark = !isDark;
}

// Hook up the event
menuBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

// btt.addEventListener("click", backTop);
// window.addEventListener("scroll", emergeButton);

pageLinkTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleButton)
);

window.addEventListener("DOMContentLoaded", checkHeight);

// darkLight.addEventListener("click", changeDarkLight);

AOS.init();
console.log(window.innerWidth, window.innerHeight);

console.log(Math.floor(Math.random() * 1000));

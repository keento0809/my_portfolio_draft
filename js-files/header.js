// Cover menu
const cover = document.querySelector(".cover");

// Menu button (hamburger menu)
export const menuBtn = document.querySelector(".toggleB");
export const crossBtn = document.querySelector(".fa-times");
export const triggers = document.querySelectorAll(".btn-trigger");

// header
export const header = document.querySelector(".ml-header");

// toggle header's background-color (based on scrollY)
let timer = null;
const scrollEventDelay = (e) => {
  clearTimeout(timer);
  timer = setTimeout(function () {
    console.log("scroll event happening!");
    if (window.scrollY !== 0) {
      if (header.classList.contains("lightMode")) {
        header.classList.add("header-lightMode");
        header.style.background = "rgba(238, 225, 172, 0.5)";
      } else {
        header.classList.add("opacity-c");
        header.style.background = "rgba(18, 14, 12,0.8)";
      }
    } else {
      header.classList.remove("opacity-c");
      header.style.background = "none";
    }
  }, 50);
};

// Toggle cover menu
export const toggleButton = () => {
  if (cover.classList.contains("visible")) {
    header.style.display = "flex";
    cover.classList.remove("visible");
  } else {
    header.style.display = "none";
    cover.classList.add("visible");
  }
};

// Hook up the event
try {
  window.addEventListener("scroll", scrollEventDelay, false);
} catch (e) {
  window.attachEvent("onscroll", scrollEventDelay);
}

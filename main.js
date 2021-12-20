// toggle btn
const cover = document.querySelector(".cover");
const toggleBtn = document.querySelector(".toggleB");
const crossBtn = document.querySelector(".fa-times");

function toggleButton() {
  if (cover.classList.contains("visible")) cover.classList.remove("visible");
  else cover.classList.add("visible");
}

toggleBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

// swipe btn
let initialMouse = 0;
let slideMovementTotal = 0;
let mouseIsDown = false;

let slider = document.querySelector("#slider");

function swipeStart(e) {
  mouseIsDown = true;
  slideMovementTotal = `${"#button-background"}`.width() - this.width() + 10;
  initialMouse = e.clientX || e.originalEvent.touches[0].pageX;
  console.log("hekeheke");
}

function swipeEnd(e) {
  mouseIsDown = false;
  let currentMouse = e.clientX || e.changedTouches[0].pageX;
  let relativeMouse = currentMouse - initialMouse;

  if (relativeMouse < slideMovementTotal) {
    slider.animate(
      {
        left: "-10px",
      },
      300
    );
    return;
  }

  slider.classList.add("unlocked");
}

slider.addEventListener("mousedown touchstart", swipeStart);
slider.addEventListener("mouseup touched", swipeEnd);

AOS.init();

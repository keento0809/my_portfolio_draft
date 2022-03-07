// build up function
const smoothScroll = () => {
  let startY = window.pageYOffset;
  const scroll = () => {
    startY = window.pageYOffset;
    let y = startY - (startY - 0) / 20 - 1;
    window.scrollTo(0, y);
    if (y < 0) return;
    requestAnimationFrame(scroll);
  };
  requestAnimationFrame(scroll);
};

// Get DOM and hook up the event
const test = document.getElementById("toTop");
test.addEventListener("click", smoothScroll);

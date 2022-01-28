import { header, toggleButton } from "./header.js";
import { menuBtn, crossBtn } from "./header.js";

// Hook up the event
menuBtn.addEventListener("click", toggleButton);
crossBtn.addEventListener("click", toggleButton);

AOS.init();

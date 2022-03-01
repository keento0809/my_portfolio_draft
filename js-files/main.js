const mainH1 = document.querySelector(".mainH1");
const mainH2 = document.querySelector(".mainH2");

export const checkHeight = () => {
  if (window.innerHeight < 1024) {
    mainH1.classList.add(".changeAnotherFontSize");
    mainH2.classList.add(".changeAnotherFontSize");
  }
};

var person = {
  firstName: "KENTO",
  lastName: "HONDA",
  age: 29,
  job: "student",
  hungry: true,
};

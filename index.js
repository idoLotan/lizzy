const svg = document.querySelectorAll("svg");

svg.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.add("bg-[#E9F6FF]");
    button.classList.add("text-[#25A7FF]"); // Add the background color class
  });

  document.addEventListener("click", function (event) {
    if (event.target !== button) {
      button.classList.remove("bg-[#E9F6FF]"); // Remove the background color class
      button.classList.remove("text-[#25A7FF]");
    }
  });
});

const extand = document.getElementById("extand");
const toolBar = document.getElementById("tool-bar");
const arrowIcon = document.getElementById("arrow-icon");
extand.addEventListener("click", function (event) {
  toolBar.classList.remove("w-[294px]");
  toolBar.classList.add("w-[818px]"); // Remove the background color class
  arrowIcon.classList.remove("fill-[#ABABAC]");
  arrowIcon.classList.add("fill-[#25A7FF]");
});

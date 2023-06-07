const svg = document.querySelectorAll("#tool-bar-btn");

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

const extandBtn = document.getElementsByName("extand")[0];
const shrinkBtn = document.getElementsByName("shrink")[0];
const toolBar = document.getElementById("tool-bar");

const arrowIcon = document.getElementById("arrow-icon");
extandBtn.addEventListener("click", function (event) {
  toolBar.classList.remove("w-72");
  toolBar.classList.add("max-w-4xl"); // Remove the background color class
  arrowIcon.classList.remove("fill-[#ABABAC]");
  arrowIcon.classList.add("fill-[#25A7FF]");
});

shrinkBtn.addEventListener("click", function (event) {
  toolBar.classList.remove("max-w-4xl");
  toolBar.classList.add("w-72"); // Remove the background color class
  arrowIcon.classList.remove("fill-[#25A7FF]");
  arrowIcon.classList.add("fill-[#ABABAC]");
});

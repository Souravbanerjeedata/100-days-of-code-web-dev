"use strict";

const btnBell = document.querySelector(".icon-tabler-bell");
const text = document.querySelector(".notification");
btnBell.addEventListener("click", () => {
  if (text.style.transform === "scale(0)") {
    text.style.transform = "scale(1)";
  } else {
    text.style.transform = "scale(0)";
  }
});

"use strict";

// selecting the circular button

const circles = [...document.querySelectorAll(".circle")];

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => {
      c.classList.remove("selected");
    });
    circle.classList.add("selected");
  });
});

// selecting checkbox

const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("click", () => {
  if (checkbox.classList.contains("checked")) {
    checkbox.innerHTML = "";
    checkbox.classList.remove("checked");
  } else {
    checkbox.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`;
    checkbox.classList.add("checked");
  }
});

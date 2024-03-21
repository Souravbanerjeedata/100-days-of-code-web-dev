"use strict";

// closing location tab by clicking cross icon

const crossBtn = document.querySelector(".icon-tabler-x");
crossBtn.addEventListener("click", () => {
  document.querySelector(".locations").style.display = "none";
});

// selecting each location

const locations = [...document.querySelectorAll(".location")];

locations.forEach((l) => {
  l.addEventListener("click", () => {
    locations.forEach((lo) => {
      lo.classList.remove("selected");
    });
    l.classList.add("selected");
  });
});

"use strict";

// closing tab upon clicking cross icon

const closeBtn = document.querySelector(".cross-icon");
const mainContainer = document.querySelector(".main-container");

closeBtn.addEventListener("click", () => {
  mainContainer.style.transform = "scale(0)";
});

// add checkbox upon clicking every collection tab

const collections = [...document.querySelectorAll(".collection")];

collections.forEach((collection) => {
  collection.addEventListener("click", (e) => {
    [...document.querySelectorAll(".check")].forEach((check) => check.remove());
    collections.forEach((c) => {
      c.style.borderColor = "transparent";
    });

    const checkmark = document.createElement("div");
    checkmark.setAttribute("class", "check");
    checkmark.innerHTML = `<img src="./img/check.svg" height="30" width="30" class="check-icon">`;

    collection.appendChild(checkmark);
    collection.style.borderColor = "#f0f0ff";
  });
});

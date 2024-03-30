"use strict";
// Open menu

const menuBtn = document.querySelector(".icon-tabler-dots");
const menuList = document.querySelector(".menu-list");

menuBtn.addEventListener("click", () => {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

// selecting an option from the menu list

const menuListOption = menuList.querySelectorAll("li");
menuListOption.forEach((option) => {
  option.addEventListener("click", () => {
    menuList.style.display = "none";
  });
});

// selecting radio buttons

const radioBtn = document.querySelectorAll(".circle");

radioBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    radioBtn.forEach((b) => {
      b.querySelector(".radio-btn").classList.remove("selected");
    });
    btn.querySelector(".radio-btn").classList.add("selected");
  });
});

// selecting square buttons

const squareBtn = document.querySelectorAll(".square");

squareBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.querySelector(".radio-square").classList.contains("selected")) {
      btn.querySelector(".radio-square").classList.remove("selected");
    } else {
      btn.querySelector(".radio-square").classList.add("selected");
    }
  });
});

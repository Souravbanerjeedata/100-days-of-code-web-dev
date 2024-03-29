"use strict";

// drop down-list for premium themes
const premiumThemes = document.querySelector(".current-themes");
const chevronDown = document.querySelector(".icon-tabler-chevron-down");
const themeOptions = document.querySelector(".themes-list");

premiumThemes.addEventListener("click", () => {
  chevronDown.style.transition = ".5s";

  if (themeOptions.style.display === "block") {
    chevronDown.style.transform = "scaleY(1)";
    themeOptions.style.display = "none";
  } else {
    chevronDown.style.transform = "scaleY(-1)";
    themeOptions.style.display = "block";
  }
});

// selecting a theme

const themes = [...themeOptions.querySelectorAll("li")];
const currentTheme = "";
const current = premiumThemes.querySelector(".current-theme");

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    chevronDown.style.transform = "scaleY(1)";
    themeOptions.style.display = "none";
    current.textContent = theme.textContent;
  });
});

// open the promote section / click create

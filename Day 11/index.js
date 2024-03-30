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
const current = premiumThemes.querySelector(".current-theme");

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    chevronDown.style.transform = "scaleY(1)";
    themeOptions.style.display = "none";
    current.textContent = theme.textContent;
  });
});

// open the promote section / click create

const form = document.querySelector("form");
const input = form.querySelector("input");
const mainSection = document.querySelector(".main");
const promoteSection = document.querySelector(".promote");
const selectedTheme = document.querySelector(".selected-theme");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value !== "") {
    mainSection.style.display = "none";
    promoteSection.style.display = "block";
    selectedTheme.textContent = current.textContent;
  }
});

// opening the protocol list

const protocol = document.querySelector(".protocol");
const protocolChevronDown = protocol.querySelector(".icon-tabler-chevron-down");
const protocolList = document.querySelector(".protocol-list");

protocol.addEventListener("click", () => {
  protocolChevronDown.style.transition = ".5s";

  if (protocolList.style.display === "block") {
    protocolChevronDown.style.transform = "scaleY(1)";
    protocolList.style.display = "none";
  } else {
    protocolChevronDown.style.transform = "scaleY(-1)";
    protocolList.style.display = "block";
  }
});

// selecting a protocol

const protocols = [...protocolList.querySelectorAll("li")];
const currentProtocol = protocol.querySelector(".selected-protocol");

protocols.forEach((proto) => {
  proto.addEventListener("click", () => {
    protocolChevronDown.style.transform = "scaleY(1)";
    protocolList.style.display = "none";
    currentProtocol.textContent = proto.textContent;
  });
});

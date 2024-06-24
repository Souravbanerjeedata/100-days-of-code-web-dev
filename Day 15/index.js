"use strict";

// select the price numbters
const plan = document.querySelector("h2");
const price = document.querySelector("span");
const priceNum = [...document.querySelectorAll(".download")];
let selectedNum = "10";

priceNum.forEach((e) => {
  e.addEventListener("click", () => {
    priceNum.forEach((num) => {
      num.classList.remove("selected");
    });
    e.classList.add("selected");

    selectedNum = e.querySelector(".download-num").textContent;

    // change the plan and price
    switch (selectedNum) {
      case "10":
        plan.textContent = "BASIC";
        price.textContent = "$25";
        break;
      case "25":
        plan.textContent = "BRONZE";
        price.textContent = "$30";
        break;
      case "50":
        plan.textContent = "SILVER";
        price.textContent = "$40";
        break;
      case "100":
        plan.textContent = "GOLD";
        price.textContent = "$50";
        break;
      default:
        plan.textContent = "BASIC";
        price.textContent = "$25";
    }
  });
});

// click subscribe

const subscribeBtn = document.querySelector("button");
const subscriptionContainer = document.querySelector(".subscription-container");
const subscribedSection = document.querySelector(".subscribed");

subscribeBtn.addEventListener("click", () => {
  subscriptionContainer.style.display = "none";
  subscribedSection.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg><p>You have successfully subscribed to the <span>${plan.textContent}</span> plan!</p>
  <p>You will get <span>${selectedNum}</span> downloads per month.</p>
  `;
  subscribedSection.style.display = "flex";

  //close button - go back to main page
  const closeBtn = document.querySelector(".icon-tabler-x");
  closeBtn.addEventListener("click", () => {
    subscribedSection.style.display = "none";
    subscriptionContainer.style.display = "flex";
  });
});

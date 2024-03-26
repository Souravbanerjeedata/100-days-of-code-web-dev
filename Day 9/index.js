new Splide(".splide").mount();

// add contact button

const addBtn = [...document.querySelectorAll(".add-contact")];

addBtn.forEach((btn) => {
  btn.addEventListener("click", (l) => {
    if (btn.textContent === "Add contact") {
      btn.classList.add("added");
      l.target.textContent = "Added";
    } else {
      btn.classList.remove("added");
      l.target.textContent = "Add contact";
    }
  });
});

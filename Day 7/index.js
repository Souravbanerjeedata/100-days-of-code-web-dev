"use strict";
// turn join button into joined by clicking

const joinBtn = document.querySelector(".join");
joinBtn.addEventListener("click", () => {
  if (joinBtn.textContent === "Join") {
    joinBtn.textContent = "Joined";
    joinBtn.classList.add("joined");
  } else {
    joinBtn.textContent = "Join";
    joinBtn.classList.remove("joined");
  }
});
// create post
const createpostBtn = document.querySelector(".create-post");
let postId = 1;

createpostBtn.addEventListener("click", () => {
  const post = document.createElement("div");
  post.classList.add("post");
  post.setAttribute("id", `${postId}`);
  post.innerHTML = `
  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
  <h5>Post ${postId}</h5>
  <textarea></textarea>
  `;
  postId += 1;
  document.body.appendChild(post);
  post.querySelector("textarea").focus();

  const posts = [...document.querySelectorAll(".post")];
  const clsBtn = [...document.querySelectorAll(".icon-tabler-x")];

  clsBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      document.body.removeChild(posts[index]);
    });
  });
});

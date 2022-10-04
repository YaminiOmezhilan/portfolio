"use strict";

const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const tabtitles = document.querySelector(".tab-titles");

tabtitles.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-links");
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tablinks.forEach((t) => t.classList.remove("active-link"));
  tabcontents.forEach((c) => c.classList.remove("active-tab"));

  // Activate tab
  clicked.classList.add("active-link");

  // Activate content area
  document
    .querySelector(`.active__content--${clicked.dataset.tab}`)
    .classList.add("active-tab");
});

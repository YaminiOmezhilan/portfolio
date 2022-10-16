"use strict";

const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const tabtitles = document.querySelector(".tab-titles");
const view = document.querySelector("#view");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const nav = document.querySelector(".nav");
const aboutme_section = document.querySelector(".aboutme-section");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyxwbjDxSYBdJe3ffbXC41FMIyVfwEDMGv0EbImRHrDNAS_z4mJmo8M4nsBFZxA8PQK5w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

///////////////////////////////////////
//About-me section

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

///////////////////////////////////////
//Contact form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

///////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener("click", function (e) {
  view.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page navigation

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

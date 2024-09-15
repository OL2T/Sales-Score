"use strict";

const menuToggle = () => {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");

  const toggleButton = document.querySelector(".btn-toggle");
  const closeButton = document.querySelector(".btn-close");

  if (toggleButton && closeButton && header && body) {
    toggleButton.addEventListener("click", () => {
      header.classList.add("is-active");
      body.classList.add("overflow-hidden");
    });

    closeButton.addEventListener("click", () => {
      header.classList.remove("is-active");
      body.classList.remove("overflow-hidden");
    });
  } else {
    console.warn("Some required elements were not found in the DOM.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  menuToggle();
});

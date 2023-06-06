/* eslint-disable no-console */
/* eslint-disable quotes */
"use strict";
console.log(">> Ready :)");

// constants and variables

const buttonOpen = document.querySelector(".js-button-open");
const buttonClose = document.querySelector(".js-button-close");
const menu = document.querySelector(".js-menu");

buttonOpen.addEventListener("click", () => {
  menu.classList.add("visible");
});

buttonClose.addEventListener("click", () => {
  menu.classList.remove("visible");
});

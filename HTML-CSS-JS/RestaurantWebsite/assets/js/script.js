'use strict';

// preload (to stop the loading once documen is loaded)
const preloader = document.querySelector("[data-preload]");
window.addEventListener("load", function() {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
})

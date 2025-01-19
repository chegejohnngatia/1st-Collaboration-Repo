let loader = document.getElementById("loader");

let body = document.getElementById("body");

body.style.display = "none";
// loader.style.display = "none";

setTimeout(() => {
  body.style.display = "block";
  loader.style.display = "none";
}, 3000);

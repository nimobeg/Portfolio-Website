// Circle dot
const circle = document.querySelector(".cr");
const dot = document.querySelector(".dot");
const body = document.querySelector("html");

body.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  var valX = x - 15;
  var valY = y - 15;
  var dotX = x - 1;
  var dotY = y - 1;
  circle.style.left = valX + "px";
  circle.style.top = valY + "px";
  dot.style.left = dotX + "px";
  dot.style.top = dotY + "px";
});

// Navigation jQuery button function
jQuery(document).ready(function () {
  jQuery("#menu-trigger").on("click", function () {
    jQuery(this).toggleClass("menu-clicked");
    jQuery("#side").toggleClass("slide-in");
    jQuery("#main").toggleClass("slide-content");
  });
});

// Contact form to EMAIL
// const form = document.getElementById("contact-form");
// const formEvent = form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let mail = new FormData(form);
//   sendMail(mail);
// });

// const sendMail = (mail) => {
//   fetch("https://ivanovski.dev/send", {
//     // ovdeka ga stavi link od vercel sto ke ga uploadiras
//     method: "post",
//     body: mail,
//   }).then((response) => {
//     return response.json();
//   });
// };

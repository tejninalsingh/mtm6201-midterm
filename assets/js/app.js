const btn = document.querySelector(".btn");
const nav = document.getElementById("nav");
const navItem = document.querySelectorAll(".nav-item");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  navItem.forEach((item) => {
    item.classList.toggle("active")
  })
  btn.classList.toggle("active")
});

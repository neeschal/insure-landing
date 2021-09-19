const nav = document.getElementById("nav");
const ham = document.getElementById("ham");
const clos = document.getElementById("close");
const mob_nav = document.getElementById("mob_nav");

nav.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  clos.classList.toggle("hidden");
  mob_nav.classList.toggle("hidden");
});

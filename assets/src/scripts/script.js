const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  const overlay = document.getElementsByClassName("overlay")[0];
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
});

const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  const overlay = document.getElementsByClassName("overlay")[0];
  menuIcon.src = `./assets/images/${menu.classList.contains("open") ? "icon-menu" : "icon-close"}.svg`;
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
});

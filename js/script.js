const boton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

boton.addEventListener("click", function () {
  menu.classList.toggle("activo");
});
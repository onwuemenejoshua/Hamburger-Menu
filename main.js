const mainMenu = document.querySelector(".mainMenu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.right = "0";
}

function close() {
  mainMenu.style.right = "-100%";
}

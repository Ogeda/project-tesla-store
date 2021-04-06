window.onload = () => {
  //Carregar estrutura do menu
  iniciaEfeitoMenu();

  controlaSubmenu();
};

function iniciaEfeitoMenu() {
  let menu = document.querySelector(".menu");

  window.onscroll = manipulaMenu;

  function manipulaMenu() {
    let posicaoScroll = window.pageYOffset;

    if (posicaoScroll > 60) {
      menu.classList.add("menu-escuro");
    } else {
      menu.classList.remove("menu-escuro");
    }

    menu.style.backgroundColor =
      "rgba(255,255,255, " + posicaoScroll / 100 + ")";
  }
}

function controlaSubmenu() {
  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((elemento) => {
    elemento.addEventListener("mouseover", mostraSubmenu);
    elemento.addEventListener("mouseout", escondeSubmenu);
  });

  function monstrarSubmenu() {}
}

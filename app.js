window.onload = () => {
  //Carregar estrutura do menu
  iniciaEfeitoMenu();
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

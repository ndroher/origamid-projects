// Navegação por Tabs
const tabMenu = document.querySelectorAll(".js-tabmenu img");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((content) => {
      if (content.classList.contains("ativo")) {
        content.classList.remove("ativo");
      }
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((img, index) => {
    img.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

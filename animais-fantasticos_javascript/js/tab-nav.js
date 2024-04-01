export default function tabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] img');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

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
}

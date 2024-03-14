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

// Accordion List
const accordionDT = document.querySelectorAll(".js-accordion dt");
const accordionDD = document.querySelectorAll(".js-accordion dd");

if (accordionDD.length && accordionDT.length) {
  accordionDD[0].classList.add("ativo");
  accordionDT[0].classList.add("ativo");

  function accordionList(dt) {
    dt.classList.toggle("ativo");
    dt.nextElementSibling.classList.toggle("ativo");
  }

  accordionDT.forEach((dt) => {
    dt.addEventListener("click", () => {
      accordionList(dt);
    });
  });
}

// Scroll Suave
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

if (linksInternos) {
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

// Section Animation on Scroll
const sections = document.querySelectorAll(".js-scroll");

if (sections.length) {
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.6) {
        section.classList.add("ativo");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

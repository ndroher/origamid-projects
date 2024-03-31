export default function accordionList() {
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
}

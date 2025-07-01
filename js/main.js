let barIcon = document.getElementById("bar"),
  mainSection = document.querySelector(".main-section"),
  links = document.querySelectorAll(".links li"),
  dropIcon = document.querySelectorAll(".drop-dawon");

dropIcon.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    let newId = link.getAttribute("data-set");
    document.getElementById(newId).classList.toggle("open");
  });
});

barIcon.addEventListener("click", function () {
  mainSection.classList.toggle("f-width");
});
let dataToShow = document.querySelectorAll(".data");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((e) => {
      e.classList.remove("active");
      let newId = link.getAttribute("data-link");

      dataToShow.forEach((data) => {
        data.classList.remove("data-show");
      });
      document.getElementById(newId).classList.add("data-show");
    });
    this.classList.add("active");
  });
});

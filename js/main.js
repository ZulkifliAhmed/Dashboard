let barIcon = document.getElementById("bar"),
  mainLinks = document.querySelectorAll(".main-links"),
  mainSection = document.querySelector(".main-section"),
  list = document.querySelector(".list"),
  grid = document.querySelector(".grid"),
  alertCarts = document.querySelectorAll(".alert-carts"),
  links = document.querySelectorAll(".links li"),
  dropIcon = document.querySelectorAll(".drop-dawon"),
  dataToShow = document.querySelectorAll(".data");

// Add & Remove Active link in Side Bar Menu
mainLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mainLinks.forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Toggle all class Menu
dropIcon.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    let newId = link.getAttribute("data-set");
    document.getElementById(newId).classList.toggle("open");
  });
});

// Side Bar Toggler
barIcon.addEventListener("click", function () {
  mainSection.classList.toggle("f-width");
});

// Remove & Add Active class in Top links & Data-Show class
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

// Show Content in List Order
list.addEventListener("click", function () {
  alertCarts.forEach((el) => {
    el.classList.add("list");
  });
});

// Show Content in Grid Order
grid.addEventListener("click", function () {
  alertCarts.forEach((el) => {
    el.classList.remove("list");
  });
});

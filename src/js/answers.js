const accordi = document.querySelectorAll(".answers__wrapp");

accordi.forEach(function (item) {
  item.children[1].addEventListener("click", () => {
    item.classList.toggle("answers__active");
  });
});

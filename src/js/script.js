const buttonAll = document.querySelectorAll(".button");
const overlays = document.querySelector(".overlays");
const closes = document.querySelector(".overlays__closes");

buttonAll.forEach((item) => {
  item.addEventListener('click', () => {
    overlays.style.display = "block";
  })
})

closes.addEventListener("click", () => {
  overlays.style.display = "none";
});
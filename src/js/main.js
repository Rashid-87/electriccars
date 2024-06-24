window.addEventListener("load", () => {

  const btn = document.querySelector(".catalog__button");
  const cards = document.querySelectorAll(".catalog__card");

  const button = document.querySelector(".electrocars__btn");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".overlay__close");

  const buttonAll = document.querySelectorAll(".button");
  const overlays = document.querySelector(".overlays");
  const closes = document.querySelector(".overlays__closes");

  btn.addEventListener("click", function () {
    for (let card of cards) {
      card.style.display = "flex";
    }

    btn.style.display = "none";
  });

  button.addEventListener('click', () => {
    overlay.style.display = "block";
  })

  close.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  buttonAll.forEach((item) => {
    item.addEventListener('click', () => {
      overlays.style.display = "block";
    })
  })

  closes.addEventListener("click", () => {
    overlays.style.display = "none";
  });
});

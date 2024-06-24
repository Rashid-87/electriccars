
const setupToggle = (buttonSelector, contentSelector, closeSelector) => {
  const button = document.querySelector(buttonSelector);
  const content = document.querySelector(contentSelector);
  const closeButton = document.querySelector(closeSelector);

  button.addEventListener("click", () => {
    content.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    content.style.display = "none";
  });
};

setupToggle(".pageuseful__btn", ".usefulone", ".usefulone__btn");
setupToggle(".pageuseful__btntwo", ".usefultwo", ".usefulone__btntwo");
setupToggle(".pageuseful__btnhree", ".usefulthree", ".usefulone__btnhree");
setupToggle(".pageuseful__btnfour", ".usefulfour", ".userfulone__btnfour");
setupToggle(".pageuseful__btnfive", ".usefulfive", ".usefulone__btnfive");

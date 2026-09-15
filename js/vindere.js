const nomineeGrid = document.querySelector(".nominee-grid");
const seeMoreBtn = document.querySelector(".see-more-btn");

seeMoreBtn.addEventListener("click", () => {
  nomineeGrid.classList.toggle("expanded");

  if (nomineeGrid.classList.contains("expanded")) {
    seeMoreBtn.textContent = "Se mindre";
  } else {
    seeMoreBtn.textContent = "Se mere";
  }
});

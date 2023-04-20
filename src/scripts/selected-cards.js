document.addEventListener("DOMContentLoaded", function () {
  const storedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
  const selectedCardGallery = document.getElementById("selected-card-gallery");

  storedCards.forEach((storedCard) => {
    const card = document.createElement("div");
    card.innerHTML = storedCard.html;
    const innerCard = card.firstChild;

    innerCard.classList.remove("selected");
    innerCard.classList.add("display-only");
    selectedCardGallery.appendChild(innerCard);
  });
});

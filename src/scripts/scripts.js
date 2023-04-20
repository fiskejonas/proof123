document.addEventListener("DOMContentLoaded", function () {
  let selectedCards = [];
  const cards = document.querySelectorAll(".card");
  const viewSelectedBtn = document.getElementById("view-selected");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const cardId = parseInt(card.dataset.id);

      if (card.classList.contains("selected")) {
        card.classList.remove("selected");
        selectedCards = selectedCards.filter(
          (storedCard) => storedCard.id !== cardId
        );
      } else {
        card.classList.add("selected");
        selectedCards.push({ id: cardId, html: card.outerHTML });
      }

      if (selectedCards.length > 0) {
        viewSelectedBtn.classList.remove("hidden");
      } else {
        viewSelectedBtn.classList.add("hidden");
      }
    });
  });

  viewSelectedBtn.addEventListener("click", function () {
    localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
    window.location.href = "selected-cards.html";
  });
});

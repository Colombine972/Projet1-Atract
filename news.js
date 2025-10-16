console.log("modal", document.getElementById("modal"));
const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal_content");

function openModal(contentHTML) {
  modalContent.innerHTML = contentHTML;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  modalContent.innerHTML = "";
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const articleBox = document.querySelector(".news_article_card");
articleBox.addEventListener("click", () => {
  openModal(articleBox.innerHTML);
});

// -------------------------------------------------------

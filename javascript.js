//faq accordion

const toggles = document.querySelectorAll('.toggle');
const texts = document.querySelectorAll('.answer');

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    texts[index].classList.toggle('open');
  });
});

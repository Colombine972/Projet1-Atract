//faq accordion

const toggles = document.querySelectorAll('.toggle');
const texts = document.querySelectorAll('.answer');

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    texts[index].classList.toggle('open');
  });
});

//Modal formulaire

const buttonPartager = document.querySelector(".partager_btn");
const dialog = document.querySelector("#modal_dialog");

buttonPartager.addEventListener("click", () => {
    dialog.showModal();
});

const buttonClose = document.querySelector(".close_btn");

buttonClose.addEventListener("click", () => {
  dialog.close();
});

const cards = document.querySelector(".carousel_items");
let theFirstChild = cards.firstChild;
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const depInput = document.querySelector("#dep");
const firstLine = document.querySelector(".first_line");
const domaineInput = document.querySelector("#domaine");
const storyInput = document.querySelector("#story");
const buttonSend = document.querySelector(".send_btn");

buttonSend.addEventListener("click", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const depValue = depInput.value.trim();
    const domaineValue = domaineInput.value.trim();
    const storyValue = storyInput.value.trim();

    if (!nameValue || !storyValue || !depValue || !domaineValue) {
        alert("Merci de remplir tous les champs !");
        return;
    }

    const card = document.createElement("li");
    card.classList.add("carousel_item");
    cards.insertBefore(card, theFirstChild);

    const nameDep = document.createElement("div");
    nameDep.classList.add("first_line");
    card.appendChild(nameDep);

    const name = document.createElement("p");
    name.classList.add("name_card");
    name.textContent = nameValue;
    nameDep.appendChild(name);

    const dep = document.createElement("p");
    dep.classList.add("dep_card");
    dep.textContent = `(${depValue})`;
    nameDep.appendChild(dep);

    const date = document.createElement("p");
    date.classList.add("date_card");
    date.textContent = new Date().toLocaleDateString();
    card.appendChild(date);

    const domaine = document.createElement("p");
    domaine.classList.add("domaine_card");
    domaine.textContent = domaineValue;
    card.appendChild(domaine);

    const story = document.createElement("p");
    story.classList.add("story_card");
    story.textContent = storyValue;
    card.appendChild(story);

    form.reset();

    dialog.close();
});

// Compteur coeur 

let nbFan = 10;
function comptage() {
    nbFan++;
    document.querySelector(".nb_fan").textContent = nbFan;
};

document.querySelector(".nb_fan").addEventListener("click", comptage);
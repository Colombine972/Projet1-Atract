const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
let dynamicModal = document.querySelector('#dynamic_modal')
const closeBtn = document.querySelector('.close_btn')
const overlay = document.querySelector('.modal_overlay')

cards.forEach(card => {
  card.addEventListener('click', indx => {
    let cardId = card.id;
    openModal(cardId)
  })
})

function openModal(id) {
  if(id == '1') {
    modal.classList.add('active')
    overlay.classList.add('overlay_active')
  } else {
    createModal(id)
  }
}

function createModal (id) {
  // let dynamicModal = document.querySelector('#dynamic_modal')
  dynamicModal.innerHTML = ""
  let title = document.createElement('h2')
  let why = document.createElement('p')
  title.innerText = `You Opened Modal Placeholder n${id}`
  why.innerText = 'The content will be displayed dynamicaly'
  dynamicModal.appendChild(title);
  dynamicModal.appendChild(why)
  dynamicModal.classList.add('active')
  overlay.classList.add('overlay_active')
}

  closeBtn.addEventListener('click', () => {
     modal.classList.remove('active')
     dynamicModal.classList.remove('active')
     overlay.classList.remove('overlay_active')
   })

   overlay.addEventListener('click', () => {
     modal.classList.remove('active')
     dynamicModal.classList.remove('active')
     overlay.classList.remove('overlay_active')
   })
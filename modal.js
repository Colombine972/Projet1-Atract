const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#close_btn')
const overlay = document.querySelector('.modal_overlay')

cards.forEach(card => {
  card.addEventListener('click', index => {
    modal.classList.add('active')
    overlay.classList.add('overlay_active')
  })
})


  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('overlay_active')
  })

  overlay.addEventListener('click', () => {
    modal.classList.remove('active')
    overlay.classList.remove('overlay_active')
  })



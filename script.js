const modalButton = document.querySelector('.modal__btn')
const modalCloseButton = document.querySelector('.modal__close')

function lockBody() {
  const body = document.body
  body.style.overflow = 'hidden'
}

function openModal() {
  const modal = document.querySelector('._modal')
  modal.classList.add('active')
}

function closeModal() {
  const modal = document.querySelector('._modal')
  modal.classList.remove('active')
}

modalButton.addEventListener('click', () => {
  openModal()
  lockBody()
})

modalCloseButton.addEventListener('click', () => {
  const body = document.body
  closeModal()
  body.style.overflow = ''
})

function onScroll() {
  const modalHeader = document.querySelector('.modal__header')
  const modalContent = document.querySelector('.modal__content')
  const contentGradient = document.querySelector('.scroll__gradient')
  const scrollBtn = document.querySelector('.scroll__button')

  modalContent.addEventListener('scroll', () => {
    if (modalContent.scrollTop > 0) {
      modalHeader.classList.add('shadow')
      contentGradient.style.display = 'none'
      scrollBtn.style.opacity = 0
    } else {
      modalHeader.classList.remove('shadow')
      contentGradient.style.display = 'block'
      scrollBtn.style.opacity = 1
    }
  })
}

onScroll()

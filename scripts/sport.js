// OPEN AND CLOSE QUIZ

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// QUIZ

let chose152 = document.getElementById('chose-152')
let chose28 = document.getElementById('chose-28')
let chose72 = document.getElementById('chose-72')

chose152.addEventListener('click', () => {
    removeActiveButtonClassForAllButtons()
    addOrRemoveActiveButtonClass(chose152)
})

chose28.addEventListener('click', () => {
    removeActiveButtonClassForAllButtons()
    addOrRemoveActiveButtonClass(chose28)
})

chose72.addEventListener('click', () => {
    removeActiveButtonClassForAllButtons()
    addOrRemoveActiveButtonClass(chose72)
})

function addOrRemoveActiveButtonClass(chosenButton) {
    if(chosenButton.classList.contains('active-button')){
        chosenButton.classList.remove('active-button')
    }
    else{
        chosenButton.classList.add('active-button')
    } 
}

function removeActiveButtonClassForAllButtons(){
    chose152.classList.remove('active-button')
    chose28.classList.remove('active-button')
    chose72.classList.remove('active-button')
}
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

function addEventListenerModal(selector, title, description, buttonText, buttonColorBlue = true) {
    const checkButtons = document.querySelectorAll(selector)

checkButtons.forEach( button => {

    button.addEventListener("click", event => {
        event.preventDefault()
        modalTitle.innerHTML = title;
        modalDescription.innerHTML = description;
        modalButton.innerHTML = buttonText;
        buttonColorBlue ? modalButton.classList.remove("red") : modalButton.classList.add("red")
        modal.open()
    })
})
}
addEventListenerModal(".actions a.check", "Marcar como lida", "Tem certeza que deseja marcar como lida essa pergunta?", "Sim, Marcar como Lida")
addEventListenerModal(".actions a.delete", "Excluir Pergunta", "Tem certeza que deseja excluir a pergunta?", "Sim, excluir", false)
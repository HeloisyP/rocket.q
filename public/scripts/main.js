import Modal from "./modal.js";

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões com a classe check. 
const checkButton = document.querySelectorAll(".actions a.check")

// Percorrer os botões dentro
checkButton.forEach(button => {

// Capturar quando o marcar como lido for clicado e depois abrir a modal.
    button.addEventListener("click", handleClick)
})

// Pegar todos os botões com a classe delete. 
const deleteButton = document.querySelectorAll('.actions a.delete')

// Percorrer os botões dentro
deleteButton.forEach(button => {

    // Capturar quando o excluir for clicado e abrir a modal.
        button.addEventListener("click", (event) => {
            handleClick(event, false)
        })
    })

    function handleClick(event, check = true) {
    event.preventDefault()
    
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"

    console.log(" Chegou aqui.")
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
    
    console.log(roomId)

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
    }
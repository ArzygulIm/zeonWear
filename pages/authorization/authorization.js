const modal = document.querySelector('.auth__modal')
const modalButton = document.querySelector('.forgot-password__btn')
const backdrop = document.querySelector('.auth__backdrop')
const content = document.querySelector('.auth__modal-inner')
const authMailInput = document.getElementById("auth-mail")
const authPasswordInput = document.getElementById("auth-password")
const forgotMailInput = document.getElementById("forgot-mail")
const disappear = document.querySelector('.auth__disappear')
let error = false

document.getElementById("sign-in__btn").addEventListener('click', (e) => {
    e.preventDefault()
    if (authMailInput.value != "" && authPasswordInput.value != "") {
        let data = {
            email: authMailInput.value,
            password: authPasswordInput.value
        }
        console.log(data)
        authMailInput.value = ""
        authPasswordInput.value = ""
        document.getElementById("auth-mail__label").style.transform = "translate(0, 0)"
        document.getElementById("auth-password__label").style.transform = "translate(0, 0)"
        setTimeout(() => {
            window.location.href = '../../index.html'
        }, 2000)
    }
})

const toggleModal = () => {
    modal.classList.toggle('modalActive')
    backdrop.classList.toggle('backdropActive')
    document.body.classList.toggle('hidden')
    content.innerHTML = error ? `
    <h2 class='hello'>Ошибка</h2>
    `: `
    <h2 class='hello'>Успешно отправлено</h2>
    `
    content.style.color = error ? "#DD2C28" : "#000000"
    disappear.textContent = error ? "Закрыть" : "Хорошо"
    disappear.style.display = 'block'
}

modalButton.addEventListener('click', (e) => {
    e.preventDefault()
    let data = {
        email: forgotMailInput.value
    }
    forgotMailInput.value = ""
    if (data.email == "") {
        error = true
    } else {
        error = false
        console.log(data)
    }
    toggleModal()
})

backdrop.addEventListener('click', toggleModal)

disappear.addEventListener('click', () => {
    error ? setTimeout(toggleModal, 500) : setTimeout(toggleModal, 1000)
    disappear.style.display = 'none'
    document.querySelector(".auth__form").classList.add(error ? "show__form" : "hide__form")
    document.querySelector(".forgot-password__form").classList.remove("show__form")
    error ? null : document.querySelector(".new-password__form").classList.add("show__form")
})

document.querySelector(".forgot-password__a").addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(".auth__form").classList.remove("show__form")
    document.querySelector(".auth__form").classList.add("hide__form")
    document.querySelector(".forgot-password__form").classList.add("show__form")
    authMailInput.value = ""
    authPasswordInput.value = ""
    document.getElementById("auth-mail__label").style.transform = "translate(0, 0)"
    document.getElementById("auth-password__label").style.transform = "translate(0, 0)"
})

document.querySelectorAll(".cansel").forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(".auth__form").classList.remove("hide__form")
        document.querySelector(".forgot-password__form").classList.remove("show__form")
        document.querySelector(".new-password__form").classList.remove("show__form")
        forgotMailInput.value = ""
        document.getElementById("forgot-mail__label").style.transform = "translate(0, 0)"
    })
})
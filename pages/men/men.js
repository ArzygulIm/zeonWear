document.querySelector(".category__title").addEventListener('click', () => {
    document.querySelector(".categories").classList.toggle("show-div")

    if (document.querySelector(".categories").classList.contains("show-div") === true) {
        document.querySelector(".categories__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".categories__wrap").classList.add("zero-height")
    }
})

document.querySelector(".sports__title").addEventListener('click', () => {
    document.querySelector(".sports").classList.toggle("show-div")

    if (document.querySelector(".sports").classList.contains("show-div") === true) {
        document.querySelector(".sports__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".sports__wrap").classList.add("zero-height")
    }
})

document.querySelector(".brand__title").addEventListener('click', () => {
    document.querySelector(".brand").classList.toggle("show-div")

    if (document.querySelector(".brand").classList.contains("show-div") === true) {
        document.querySelector(".brand__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".brand__wrap").classList.add("zero-height")
    }
})

document.querySelector(".price__title").addEventListener('click', () => {
    document.querySelector(".price").classList.toggle("show-div")

    if (document.querySelector(".price").classList.contains("show-div") === true) {
        document.querySelector(".price__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".price__wrap").classList.add("zero-height")
    }
})

document.querySelector(".size__title").addEventListener('click', () => {
    document.querySelector(".size").classList.toggle("show-div")

    if (document.querySelector(".size").classList.contains("show-div") === true) {
        document.querySelector(".size__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".size__wrap").classList.add("zero-height")
    }
})

document.querySelector(".material__title").addEventListener('click', () => {
    document.querySelector(".material").classList.toggle("show-div")

    if (document.querySelector(".material").classList.contains("show-div") === true) {
        document.querySelector(".material__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".material__wrap").classList.add("zero-height")
    }
})

document.querySelector(".color__title").addEventListener('click', () => {
    document.querySelector(".color").classList.toggle("show-div")

    if (document.querySelector(".color").classList.contains("show-div") === true) {
        document.querySelector(".color__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".color__wrap").classList.add("zero-height")
    }
})

document.getElementById("search").addEventListener('input', () => {
    document.getElementById("search__label").style.transform = document.getElementById("search").value == "" ? null : ("translate(-15px, -30px)")
    document.querySelector(".men__header__title").textContent = "РЕзультаты поиска"
    document.querySelector(".men__header__adress").innerHTML = document.getElementById("search").value == "" ?
        `
    <span>Главная /</span>
    <span>Мужчины /</span>
    <span>Top flex</span>
    `
        : `
    <span>Главная /</span>
    <span> Результаты поиска</span>
    `
})

document.getElementById("price1").addEventListener('input', () => {
    document.getElementById("price1__span").textContent = `${document.getElementById("price1").value} ₽`
    document.getElementById("price1__label").style.transform = document.getElementById("price1").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("price2").addEventListener('input', () => {
    document.getElementById("price2__span").textContent = `${document.getElementById("price2").value} ₽`
    document.getElementById("price2__label").style.transform = document.getElementById("price2").value == "" ? null : ("translate(-15px, -30px)")
})

const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')
const modalButton = document.querySelector('.modal-btn')
const closeModalBtn = document.querySelector(".modal__close-btn")
const toggleModal = () => {
    modal.classList.toggle('modalActive')
    backdrop.classList.toggle('backdropActive')
    document.body.classList.toggle('hidden')
}

modalButton.addEventListener('click', (e) => {
    e.preventDefault()
    toggleModal()
})
closeModalBtn.addEventListener('click', () => {
    toggleModal()
})
backdrop.addEventListener('click', () => {
    console.log("work")
    toggleModal()
})

document.querySelector(".section__filter__menu__title").addEventListener('click', () => {
    document.querySelector(".section__dropdown").classList.toggle("show-div")
    document.querySelector(".section__dropdown__back").classList.toggle("show-div")
})

document.querySelector(".section__dropdown__back").addEventListener('click', () => {
    document.querySelector(".section__dropdown").classList.toggle("show-div")
    document.querySelector(".section__dropdown__back").classList.toggle("show-div")
})
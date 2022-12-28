const productCarousel = () => {
    const carouselList = document.querySelector('.product-carousel__list');
    const carouselItems = document.querySelectorAll('.product-carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".product-carousel__prevBtn")
    const nextBtn = document.querySelector(".product-carousel__nextBtn")

    prevBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 4 : item.dataset.pos = +item.dataset.pos - 1
        })
    })
    nextBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 4 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
        })
    })
}
productCarousel()

const productImgCarousel = () => {
    const carouselList = document.querySelector('.product-img-carousel__list');
    const carouselItems = document.querySelectorAll('.product-img-carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".product-img-carousel__prevBtn")
    const nextBtn = document.querySelector(".product-img-carousel__nextBtn")

    prevBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 5 : item.dataset.pos = +item.dataset.pos - 1
        })
    })
    nextBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 5 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
        })
    })
}
productImgCarousel()

const productBoxImg = document.querySelectorAll(".product__box-img")
productBoxImg.forEach(el => {
    el.addEventListener('click', () => {
        document.getElementById("product-img-full").style.display = "block"
        document.body.classList.toggle('hidden')
    })
})
document.getElementById("close__full").addEventListener('click', () => {
    document.getElementById("product-img-full").style.display = "none"
    document.body.classList.remove('hidden')
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
    toggleModal()
})
document.getElementById("add_to_cart").addEventListener("click", () => {
    document.querySelector(".added-to-cart__wrap").classList.add('flex')

    setTimeout(() => {
        document.querySelector(".added-to-cart__wrap").classList.remove('flex')
    }, 2000)
})

// Получить значение из sessionStorage
var data = sessionStorage.getItem('productId');
console.log(data)
// // Удалить значение из sessionStorage
// sessionStorage.removeItem('key');
// // Очистить
// sessionStorage.clear();
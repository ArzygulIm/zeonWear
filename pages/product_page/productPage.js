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
var productId = sessionStorage.getItem('productId');
// // Удалить значение из sessionStorage
// sessionStorage.removeItem('key');
// // Очистить
// sessionStorage.clear();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBOC9RuMcJL3fMmQ-2-XPdcCOXs7TSulKI",
    authDomain: "zeon-1bfb4.firebaseapp.com",
    projectId: "zeon-1bfb4",
    storageBucket: "zeon-1bfb4.appspot.com",
    messagingSenderId: "683663662272",
    appId: "1:683663662272:web:889183c1d3824f21b22125",
    databaseURL: "https://DATABASE_NAME.firebaseio.com"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";



const getProductDetails = async () => {
    const docRef = doc(db, "product", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        renderProductDetails(docSnap.data());
    } else {
        console.log("No such document!");
    }
}
getProductDetails()

const renderProductDetails = (data) => {
    if (data) {
        console.log(data)
        const imgRow = document.querySelector(".product__row")
        data.images.map((el, index) => {
            const col6 = document.createElement("div")
            col6.className = "col-6 product__col-6"
            col6.innerHTML = `
            <div class="product__box-img">
                <img src=${el} alt="">
            </div>
            `
            col6.addEventListener('click', () => {
                document.getElementById("product-img-full").style.display = "block"
                document.body.classList.toggle('hidden')
            })
            imgRow.append(col6)

            const li = document.createElement('li')
            li.className = "product-img-carousel__item"
            li.style.backgroundImage = `url(${el})`
            li.dataset.pos = index
            document.querySelector(".product-img-carousel__list").append(li)
            
        })

        document.querySelector(".product__box__text__first").innerHTML = `
        <h5>Описание</h5>
        <p>${data.description}</p>
        <a href="">Подробнее</a>
        `

        if (typeof (data.materials) == "string") {
            const material = document.createElement("div")
            material.className = "product__box__characteristics__wrap"
            material.innerHTML = `
            <div class="product__box__characteristics">
                <p>Материал:</p>
                <div></div>
            </div>
            <div>${data.materials}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(material)
        } else {
            for (const key in data.materials) {
                if (key == "top") {
                    const material = document.createElement("div")
                    material.className = "product__box__characteristics__wrap"
                    material.innerHTML = `
                        <div class="product__box__characteristics">
                            <p>Материал верха:</p>
                            <div></div>
                        </div>
                        <div>${data.materials.top}</div>`
                    document.querySelector(".product__box__characteristics__wrap").append(material)
                } else if (key == "inner") {
                    const material = document.createElement("div")
                    material.className = "product__box__characteristics__wrap"
                    material.innerHTML = `
                        <div class="product__box__characteristics">
                            <p>Внутренний материал:</p>
                            <div></div>
                        </div>
                        <div>${data.materials.inner}</div>`
                    document.querySelector(".product__box__characteristics__wrap").append(material)
                } else if (key == "sole") {
                    const material = document.createElement("div")
                    material.className = "product__box__characteristics__wrap"
                    material.innerHTML = `
                        <div class="product__box__characteristics">
                            <p>Материал подошвы:</p>
                            <div></div>
                        </div>
                        <div>${data.materials.sole}</div>`
                    document.querySelector(".product__box__characteristics__wrap").append(material)
                } else if (key == "slipsole") {
                    const material = document.createElement("div")
                    material.className = "product__box__characteristics__wrap"
                    material.innerHTML = `
                        <div class="product__box__characteristics">
                            <p>Материал стельки:</p>
                            <div></div>
                        </div>
                        <div>${data.materials.slipsole}</div>`
                    document.querySelector(".product__box__characteristics__wrap").append(material)
                } else {
                    const material = document.createElement("div")
                    material.className = "product__box__characteristics__wrap"
                    material.innerHTML = `
                        <div class="product__box__characteristics">
                            <p>${key}:</p>
                            <div></div>
                        </div>
                        <div>${data.materials[key]}</div>`
                    document.querySelector(".product__box__characteristics__wrap").append(material)
                }
            }
        }

        if (data.season) {
            const season = document.createElement("div")
            season.className = "product__box__characteristics__wrap"
            season.innerHTML = `
            <div class="product__box__characteristics">
                <p>Сезон:</p>
                <div></div>
            </div>
            <div>${data.season}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(season)
        }

        if (data.colorsImages) {
            const colors = document.createElement("div")
            colors.className = "product__box__characteristics__wrap"
            let colorText = ""
            data.colorsImages.forEach((el, index) => {
                if (index == data.colorsImages.length - 1 && index < 4) {
                    colorText = el.colorRu ? colorText + el.colorRu : colorText + el.value
                } else if (index < 4) {
                    colorText = el.colorRu ? colorText + el.colorRu + ", " : colorText + el.value + ", "
                } else if (index == 4) {
                    colorText = colorText.slice(0, colorText.length - 2)
                } else {
                    colorText = colorText + " ..."
                }
            })
            colors.innerHTML = `
            <div class="product__box__characteristics">
                <p>Цвет:</p>
                <div></div>
            </div>
            <div>${colorText}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(colors)
        }

        if (data.sports) {
            const sports = document.createElement("div")
            sports.className = "product__box__characteristics__wrap"
            let sportsText = ""
            data.sports.forEach((el, index) => {
                if (index == data.sports.length - 1 && index < 4) {
                    sportsText = sportsText + el
                } else if (index < 4) {
                    sportsText = sportsText + el + ", "
                } else if (index == 4) {
                    sportsText = sportsText.slice(0, sportsText.length - 2)
                } else {
                    sportsText = sportsText + " ..."
                }
            })
            sports.innerHTML = `
            <div class="product__box__characteristics">
                <p>Вид спорта:</p>
                <div></div>
            </div>
            <div>${sportsText}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(sports)
        }

        if (data.manufacturer) {
            const manufacturer = document.createElement("div")
            manufacturer.className = "product__box__characteristics__wrap"
            manufacturer.innerHTML = `
            <div class="product__box__characteristics">
                <p>Страна производства:</p>
                <div></div>
            </div>
            <div>${data.manufacturer}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(manufacturer)
        }

        if (data.clasp) {
            const clasp = document.createElement("div")
            clasp.className = "product__box__characteristics__wrap"
            clasp.innerHTML = `
            <div class="product__box__characteristics">
                <p>Застежка:</p>
                <div></div>
            </div>
            <div>${data.clasp}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(clasp)
        }

        if (data.articule) {
            const articule = document.createElement("div")
            articule.className = "product__box__characteristics__wrap"
            articule.innerHTML = `
            <div class="product__box__characteristics">
                <p>Артикул:</p>
                <div></div>
            </div>
            <div>${data.articule}</div>`
            document.querySelector(".product__box__characteristics__wrap").append(articule)
        }

        if (data.colorsImages) {
            data.colorsImages.forEach(el => {
                if (el.url) {
                    const colorImg = document.createElement('img')
                    colorImg.className = "product__color__img"
                    colorImg.src = el.url
                    document.querySelector(".product__color").append(colorImg)
                }
            })

        }

    }
}

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
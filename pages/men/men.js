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

// document.getElementById("search").addEventListener('input', () => {
//     document.getElementById("search__label").style.transform = document.getElementById("search").value == "" ? null : ("translate(-15px, -30px)")
//     document.querySelector(".men__header__title").textContent = "РЕзультаты поиска"
//     document.querySelector(".men__header__adress").innerHTML = document.getElementById("search").value == "" ?
//         `
//     <span>Главная /</span>
//     <span>Мужчины /</span>
//     <span>Top flex</span>
//     `
//         : `
//     <span>Главная /</span>
//     <span> Результаты поиска</span>
//     `
// })

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



const getAllProducts = async () => {
    const docRef = doc(db, "products", "men");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data().products);
        renderAllProducts(docSnap.data().products)
    } else {
        console.log("No such document!");
    }
}
getAllProducts()

const renderAllProducts = (data) => {
    if (data) {
        const row = document.querySelector(".output")


        // < div class="col-3" >
        //     <a href="../product_page/productPage.html" class="section__box men__box">
        //         <div class="favorite-wrap">
        //             <span class="section__new">NEW</span>
        //             <img src="../../images/VectorHeart.png" alt="">
        //         </div>
        //         <img class="section__box-img" src="../../images/Rectangle44.png" alt="">
        //             <div class="section__box-text">
        //                 <h5>Top Flex</h5>
        //                 <p>Lorem ipsum dolor sit amet, consectetur</p>
        //                 <div>
        //                     <h6>12 980 ₽</h6>
        //                     <h6>11 033 ₽</h6>
        //                 </div>
        //             </div>
        //     </a>
        //             </div >

        data?.forEach(el => {
            const col = document.createElement("div")
            const box = document.createElement("div")
            const favoriteWrap = document.createElement("div")
            const newSpan = document.createElement("span")
            const favoriteImg = document.createElement("img")
            const boxImg = document.createElement("img")
            const boxTextWrap = document.createElement("div")
            newSpan.textContent = el.isNew ? "NEW" : ""
            favoriteImg.src = "../../images/VectorHeart.png"
            boxImg.src = el.img
            boxTextWrap.innerHTML = `
            <h5>${el.name}</h5>
            <p>${el.description}</p>
            <div>
            <h6>${el.price}</h6>
            <h6>${el.oldPrice}</h6>
            <h6>${el.sale}</h6>
            </div>
            `

            col.className = "col-3"
            box.className = "section__box men__box"
            favoriteWrap.className = "favorite-wrap"
            newSpan.className = el.isNew ? "section__new" : ""
            boxImg.className = "section__box-img"
            boxTextWrap.className = "section__box-text"

            favoriteWrap.append(newSpan, favoriteImg)
            box.append(favoriteWrap, boxImg, boxTextWrap)
            col.append(box)
            row.append(col)

            box.addEventListener('click', () => {
                // Сохранить значение в sessionStorage
                sessionStorage.setItem('productId', el.id);
                window.location.href = "../product_page/productPage.html"
            })

        })
    }
}

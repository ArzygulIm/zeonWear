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
import { doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const regUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let counter = 0
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        counter++
    });
    console.log(counter)
}
regUsers()

let favoriteSportsObject = {}
let data = {}

document.getElementById("close__favorite-sports").addEventListener('click', (e) => {
    e.preventDefault()
    favoriteSportsObject = {}

    if (document.getElementById("football").checked) {
        favoriteSportsObject.football = "Футбол"
    }
    if (document.getElementById("mini-football").checked) {
        favoriteSportsObject.mini_football = "Мини-футбол"
    }
    if (document.getElementById("volleyball").checked) {
        favoriteSportsObject.volleyball = "Волейбол"
    }
    if (document.getElementById("athletics").checked) {
        favoriteSportsObject.athletics = "Легкая атлетика"
    }
    if (document.getElementById("handball").checked) {
        favoriteSportsObject.handball = "Гандбол"
    }
    if (document.getElementById("fitness").checked) {
        favoriteSportsObject.fitness = "Фитнес"
    }
    let favSports = ""
    let favoriteSportsArray = []
    document.querySelector(".favorite__sports-title").classList.remove("favorite__sports-title__active")
    document.querySelector(".favorite__sports").classList.remove("show-favorite__sports")
    for (const key in favoriteSportsObject) {
        favoriteSportsArray.push(favoriteSportsObject[key])
        favSports = favSports + favoriteSportsObject[key] + ", "
    }

    favSports = favSports.slice(0, favSports.length - 2)

    document.querySelector(".favorite__sports-title").innerHTML = favoriteSportsArray.length > 0 ? `
        <p class="favorite__sports-title__p">${favSports}</p>
        <img src="../../images/Polygon2.png" alt="">
    `: `
        <p class="favorite__sports-title__p">Любимые виды спорта</p>
        <img src="../../images/Polygon2.png" alt="">
    `

    document.querySelector(".favorite__sports").classList.remove("show-div")
    document.querySelector(".favorite__sports-title").classList.remove("title__active")
    document.querySelector(".second-favorite__sports-title").style.transform = favoriteSportsArray.length > 0 ? "translate(-15px, -30px)" : "translate(0, 0)"
    document.querySelector(".auth__reg__backdrop").style.zIndex = -1
})

const selectGender = (e) => {
    document.querySelector(".gender__title").textContent = e
}

const selectDate = (e, className) => {
    document.querySelector(className).textContent = e
}

const selectDateOfBirth = (elements, dropdown) => {
    document.querySelectorAll(elements).forEach(el => {
        el.addEventListener('click', () => {
            selectDate(el.innerHTML, `.${dropdown}__title`)
            document.querySelector(`.${dropdown}__title`).classList.remove("title__active")
            document.querySelector(`.second__${dropdown}__title`).style.transform = "translate(-15px, -30px)"
            document.querySelector(".date-of-birth__wrap").style.bottom = "-20px"
            document.querySelector(`.${dropdown}`).classList.remove("show-div")
            document.querySelector(".auth__reg__backdrop").style.zIndex = -1
        })
    })
}

selectDateOfBirth(".days-of-birth", "day-of-birth")
selectDateOfBirth(".months-of-birth", "month-of-birth")
selectDateOfBirth(".years-of-birth", "year-of-birth")

document.querySelectorAll(".genders").forEach(el => {
    el.addEventListener('click', () => {
        selectGender(el.innerHTML)
        document.querySelector(".gender__title").classList.remove("title__active")
        document.querySelector(".second-gender__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".gender").classList.remove("show-div")
        document.querySelector(".auth__reg__backdrop").style.zIndex = -1
    })
})

document.querySelector(".auth__reg__backdrop").addEventListener('click', () => {
    favoriteSportsObject = {}

    if (document.getElementById("football").checked) {
        favoriteSportsObject.football = "Футбол"
    }
    if (document.getElementById("mini-football").checked) {
        favoriteSportsObject.mini_football = "Мини-футбол"
    }
    if (document.getElementById("volleyball").checked) {
        favoriteSportsObject.volleyball = "Волейбол"
    }
    if (document.getElementById("athletics").checked) {
        favoriteSportsObject.athletics = "Легкая атлетика"
    }
    if (document.getElementById("handball").checked) {
        favoriteSportsObject.handball = "Гандбол"
    }
    if (document.getElementById("fitness").checked) {
        favoriteSportsObject.fitness = "Фитнес"
    }
    let favSports = ""
    let favoriteSportsArray = []
    for (const key in favoriteSportsObject) {
        favoriteSportsArray.push(favoriteSportsObject[key])
        favSports = favSports + favoriteSportsObject[key] + ", "
    }

    favSports = favSports.slice(0, favSports.length - 2)

    document.querySelector(".favorite__sports-title").innerHTML = favoriteSportsArray.length > 0 ? `
        <p class="favorite__sports-title__p">${favSports}</p>
        <img src="../../images/Polygon2.png" alt="">
    `: `
    
        <p class="favorite__sports-title__p">Любимые виды спорта</p>
        <img src="../../images/Polygon2.png" alt="">
    `
    document.querySelector(".second-favorite__sports-title").style.transform = favoriteSportsArray.length > 0 ? "translate(-15px, -30px)" : "translate(0, 0)"
    document.querySelector(".gender__title").classList.remove("title__active")
    document.querySelector(".gender").classList.remove("show-div")
    document.querySelector(".favorite__sports-title").classList.remove("title__active")
    document.querySelector(".favorite__sports").classList.remove("show-div")
    document.querySelector(".day-of-birth__title").classList.remove("title__active")
    document.querySelector(".day-of-birth").classList.remove("show-div")
    document.querySelector(".month-of-birth__title").classList.remove("title__active")
    document.querySelector(".month-of-birth").classList.remove("show-div")
    document.querySelector(".year-of-birth__title").classList.remove("title__active")
    document.querySelector(".year-of-birth").classList.remove("show-div")
    document.querySelector(".auth__reg__backdrop").style.zIndex = -1
})

document.getElementById("reg-submit").addEventListener('click', (e) => {
    e.preventDefault()
    data.name = document.getElementById("reg-name").value
    data.surname = document.getElementById("surname").value
    data.gender = document.querySelector(".gender__title").innerHTML.length < 10 ? document.querySelector(".gender__title").innerHTML : null
    data.date_of_birth = document.querySelector(".day-of-birth__title").innerHTML.length < 3 && document.querySelector(".month-of-birth__title").innerHTML.length < 15 && document.querySelector(".year-of-birth__title").innerHTML.length < 5 ? `${document.querySelector(".day-of-birth__title").innerHTML}.${document.querySelector(".month-of-birth__title").innerHTML}.${document.querySelector(".year-of-birth__title").innerHTML}` : null
    data.city = document.getElementById("city").value
    data.favorite_sports = favoriteSportsObject
    data.password = document.getElementById("password").value === document.getElementById("repeat-password").value ? document.getElementById("password").value : { error: "Пароли не совпадают" }
    data.mail = document.getElementById("e-mail").value
    data.subscribe = document.getElementById("subscribe").checked

    regUser(data)
})

const regUser = async (data) => {
    await setDoc(doc(db, "users", document.getElementById("e-mail").value), data);
}

import { updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const washingtonRef = doc(db, "users", "arzygul@mail.ru");

// const updateUser = async (data) => {
//     await updateDoc(washingtonRef, {
//         capital: true
//     });
// }
// updateUser()

// let products = [
//     {
//         name: "кроссовки Zeon Wear 1",
//         description: "Кроссовки белые",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200902_174605_1.png",
//         price: "11500 ₽",
//         oldPrice: "12800 ₽",
//         sale: "10%",
//         isNew: true,
//         id: "zeonWear1"
//     },
//     {
//         name: "Футболка Zeon Wear 1",
//         description: "Футболка желтая",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(1).png",
//         price: "5000 ₽",
//         oldPrice: "7000 ₽",
//         sale: "30%",
//         isNew: false,
//         id: "zeonWear2"
//     },
//     {
//         name: "Футболка Zeon Wear 2",
//         description: "Футболка голубая",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(1).png",
//         price: "3000 ₽",
//         isNew: true,
//         id: "zeonWear3"
//     },
//     {
//         name: "кроссовки Zeon Wear 2",
//         description: "Кроссовки зеленые с черными отттенками",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(3).png",
//         price: "10500 ₽",
//         oldPrice: "10700 ₽",
//         sale: "2%",
//         isNew: true,
//         id: "zeonWear4"
//     },
//     {
//         name: "кроссовки Zeon Wear 3",
//         description: "Кроссовки красные",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(4).png",
//         price: "14000 ₽",
//         oldPrice: "15000 ₽",
//         sale: "7%",
//         isNew: false,
//         id: "zeonWear5"
//     },
//     {
//         name: "Футболка Zeon Wear 3",
//         description: "Футболка зеленая",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(5).png",
//         price: "5000 ₽",
//         oldPrice: "7000 ₽",
//         sale: "30%",
//         isNew: false,
//         id: "zeonWear6"
//     },
//     {
//         name: "Футболка Zeon Wear 4",
//         description: "Футболка желтая",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(1).png",
//         price: "5000 ₽",
//         oldPrice: "7000 ₽",
//         sale: "30%",
//         isNew: false,
//         id: "zeonWear7"
//     },
//     {
//         name: "кроссовки Zeon Wear 4",
//         description: "Кроссовки белые",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200902_174605_1.png",
//         price: "11500 ₽",
//         oldPrice: "12800 ₽",
//         sale: "10%",
//         isNew: false,
//         id: "zeonWear8"
//     },
//     {
//         name: "кроссовки Zeon Wear 5",
//         description: "Кроссовки белые",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200902_174605_1.png",
//         price: "11500 ₽",
//         oldPrice: "12800 ₽",
//         sale: "10%",
//         isNew: false,
//         id: "zeonWear9"
//     },
//     {
//         name: "кроссовки Zeon Wear 6",
//         description: "Кроссовки красные",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(4).png",
//         price: "14000 ₽",
//         oldPrice: "15000 ₽",
//         sale: "7%",
//         isNew: false,
//         id: "zeonWear10"
//     },
//     {
//         name: "Футболка Zeon Wear 5",
//         description: "Футболка голубая",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(1).png",
//         price: "4000 ₽",
//         oldPrice: "5000 ₽",
//         sale: "20%",
//         isNew: false,
//         id: "zeonWear3"
//     },
//     {
//         name: "кроссовки Zeon Wear 7",
//         description: "Кроссовки красные",
//         img: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/Rectangle44(4).png",
//         price: "14000 ₽",
//         oldPrice: "15000 ₽",
//         sale: "7%",
//         isNew: false,
//         id: "zeonWear12"
//     }
// ]

let productsDetails = {
    name: "кроссовки Zeon Wear 1",
    model: "TORS2102IN",
    id: "zeonWear1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent. Netus eleifend cursus odio semper ac pharetra. Malesuada tristique nulla augue aliquam. Amet, volutpat nisl et scelerisque ut egestas eget",
    materials: {
        top: "полимер, текстиль",
        inner: "текстиль",
        sole: "искусственный материал, резина",
        slipsole: "текстиль"
    },
    season: "мульти",
    kindOfSport: "бег",
    manufacturer: "Камбоджа",
    clasp: "шнурки",
    articule: 'AS455AMKBWJ7',
    images: [
        "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200902_174605_1.png",
        "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200902_174609_3.png",
        ""
    ],
    comments: [

    ],
    colorsImages: [
        {
            value: "1",
            url: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200707_123825_dris2102in_2(1).png"
        },
        {
            value: "2",
            url: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200707_123825_dris2102in_2.png"
        },
        {
            value: "3",
            url: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200710_110201_dris2109in_2.png"
        },
        {
            value: "4",
            url: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200710_110248_dris2108in_2(1).png"
        },
        {
            value: "5",
            url: "https://raw.githubusercontent.com/ArzygulIm/zeonWear/master/images/20200710_110248_dris2108in_2.png"
        },
        {
            value: "6",
            url: ""
        }
    ]
}

// console.log(products)
// const regProducts = async (data) => {
//     await setDoc(doc(db, "products", "men"), {products});
//     console.log("products created")
// }
// regProducts(products)

// document with generated ID
// const docRef = await addDoc(collection(db, "cities"), {
//     name: "Tokyo",
//     country: "Japan"
//   });
//   console.log("Document written with ID: ", docRef.id);


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
})
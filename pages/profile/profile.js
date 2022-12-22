document.getElementById("profile-name").addEventListener('input', () => {
    document.getElementById("profile-name__label").style.transform = document.getElementById("profile-name").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("profile-surname").addEventListener('input', () => {
    document.getElementById("profile-surname__label").style.transform = document.getElementById("profile-surname").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("profile-mail").addEventListener('input', () => {
    document.getElementById("profile-mail__label").style.transform = document.getElementById("profile-mail").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("profile-street").addEventListener('input', () => {
    document.getElementById("profile-street__label").style.transform = document.getElementById("profile-street").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("profile-street").addEventListener('input', () => {
    document.getElementById("profile-street__label").style.transform = document.getElementById("profile-street").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("apartment").addEventListener('input', () => {
    document.getElementById("apartment__label").style.transform = document.getElementById("apartment").value == "" ? null : ("translate(-15px, -30px)")
})

document.getElementById("flat").addEventListener('input', () => {
    document.getElementById("flat__label").style.transform = document.getElementById("flat").value == "" ? null : ("translate(-15px, -30px)")
})
document.querySelector(".gender__title").addEventListener('click', () => {
    document.querySelector(".gender__title").classList.toggle("title__active")
    document.querySelector(".gender").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2
})

document.querySelector(".day-of-birth__title").addEventListener('click', () => {
    document.querySelector(".day-of-birth__title").classList.toggle("title__active")
    document.querySelector(".day-of-birth").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2

})

document.querySelector(".month-of-birth__title").addEventListener('click', () => {
    document.querySelector(".month-of-birth__title").classList.toggle("title__active")
    document.querySelector(".month-of-birth").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2

})

document.querySelector(".year-of-birth__title").addEventListener('click', () => {
    document.querySelector(".year-of-birth__title").classList.toggle("title__active")
    document.querySelector(".year-of-birth").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2

})
const selectGender = (e) => {
    document.querySelector(".gender__title").textContent = e
}

const selectDayOfBirth = (e) => {
    document.querySelector(".day-of-birth__title").textContent = e
}

const selectMonthOfBirth = (e) => {
    document.querySelector(".month-of-birth__title").textContent = e
}


const selectYearOfBirth = (e) => {
    document.querySelector(".year-of-birth__title").textContent = e
}

const selectRegion = (e) => {
    document.querySelector(".region__title").textContent = e
}

document.querySelectorAll(".days-of-birth").forEach(el => {
    el.addEventListener('click', () => {
        selectDayOfBirth(el.innerHTML)
        document.querySelector(".day-of-birth__title").classList.remove("title__active")
        document.querySelector(".second__day-of-birth__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".date-of-birth__wrap").style.bottom = "-20px"
        document.querySelector(".day-of-birth").classList.remove("show-div")
        document.querySelector(".profile__backdrop").style.zIndex = -1
    })
})
document.querySelectorAll(".months-of-birth").forEach(el => {
    el.addEventListener('click', () => {
        selectMonthOfBirth(el.innerHTML)
        document.querySelector(".month-of-birth__title").classList.remove("title__active")
        document.querySelector(".second__month-of-birth__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".date-of-birth__wrap").style.bottom = "-20px"
        document.querySelector(".month-of-birth").classList.remove("show-div")
        document.querySelector(".profile__backdrop").style.zIndex = -1
    })
})
document.querySelectorAll(".years-of-birth").forEach(el => {
    el.addEventListener('click', () => {
        selectYearOfBirth(el.innerHTML)
        document.querySelector(".year-of-birth__title").classList.remove("title__active")
        document.querySelector(".second__year-of-birth__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".date-of-birth__wrap").style.bottom = "-20px"
        document.querySelector(".year-of-birth").classList.remove("show-div")
        document.querySelector(".profile__backdrop").style.zIndex = -1
    })
})
document.querySelectorAll(".genders").forEach(el => {
    el.addEventListener('click', () => {
        selectGender(el.innerHTML)
        document.querySelector(".gender__title").classList.remove("title__active")
        document.querySelector(".second-gender__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".gender").classList.remove("show-div")
        document.querySelector(".profile__backdrop").style.zIndex = -1
    })
})

document.querySelector(".region__title").addEventListener('click', () => {
    document.querySelector(".region__title").classList.toggle("title__active")
    document.querySelector(".region").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2
})

document.querySelectorAll(".regions").forEach(el => {
    el.addEventListener('click', () => {
        selectRegion(el.innerHTML)
        document.querySelector(".region__title").classList.remove("title__active")
        document.querySelector(".second-region__title").style.transform = "translate(-15px, -30px)"
        document.querySelector(".region").classList.remove("show-div")
        document.querySelector(".profile__backdrop").style.zIndex = -1
    })
})

document.querySelector(".city__title").addEventListener('click', () => {
    document.querySelector(".city__title").classList.toggle("title__active")
    const dropdown =
        document.querySelector(".region__title").textContent === "Город Бишкек" ?
            `
            <p class="cities">Октябрьский район</p>
            <p class="cities">Первомайский район</p>
            <p class="cities">Свердловский район</p>
            <p class="cities">Ленинский район</p>
            `
            : document.querySelector(".region__title").textContent === "Баткенская область" ?
                `
            <p class="cities">Баткенский район</p>
            <p class="cities">Кадамжайский район</p>
            <p class="cities">Лейлекский район</p>          
            `
                :
                document.querySelector(".region__title").textContent === "Джалал-Абадская область" ?
                    `
            <p class="cities">Аксыйский район</p>
            <p class="cities">Ала-Букинский район</p>
            <p class="cities">Базар-Коргонский район</p>
            <p class="cities">Чаткальский район</p>
            <p class="cities">Ноокенский район</p>
            <p class="cities">Сузакский район</p>
            <p class="cities">Тогуз-Тороуский район</p>
            <p class="cities">Токтогульский район</p>      
            `
                    : document.querySelector(".region__title").textContent === "Иссык-Кульская область" ?
                        `
            <p class="cities">Ак-Суйский район</p>
            <p class="cities">Жети-Огузский район</p>
            <p class="cities">Тонский район</p>
            <p class="cities">Тюпский район</p>
            <p class="cities">Иссык-Кульский район</p>    
            `
                        :
                        document.querySelector(".region__title").textContent === "Нарынская область" ?
                            `
            <p class="cities">Ак-Талинский район</p>
            <p class="cities">Ат-Башынский район</p>
            <p class="cities">Джумгальский район</p>
            <p class="cities">Кочкорский район</p>
            <p class="cities">Нарынский район</p>    
            `
                            :
                            document.querySelector(".region__title").textContent === "Ошская область" ?
                                `
            <p class="cities">Алайский район</p>
            <p class="cities">Араванский район</p>
            <p class="cities">Чон-Алайский район</p>
            <p class="cities">Кара-Кулжинский район</p>
            <p class="cities">Кара-Сууский район</p>
            <p class="cities">Ноокатский район</p>
            <p class="cities">Узгенский район</p>    
            `
                                : document.querySelector(".region__title").textContent === "Таласская область" ?
                                    `
            <p class="cities">Бакай-Атинский район</p>
            <p class="cities">Кара-Бууринский район</p>
            <p class="cities">Манасский район</p>
            <p class="cities">Таласский район</p>
            `
                                    : document.querySelector(".region__title").textContent === "Чуйская область" ?
                                        `
            <p class="cities">Аламудунский район</p>
            <p class="cities">Чуйский район</p>
            <p class="cities">Жайылский район</p>
            <p class="cities">Кеминский район</p>
            <p class="cities">Московский район</p>
            <p class="cities">Панфиловский район</p>
            <p class="cities">Сокулукский район</p>
            <p class="cities">Ысык-Атинский район</p>
            `
                                        :
                                        `
    <p class="cities">Выберите область</p>
    `


    document.querySelector(".city").innerHTML = dropdown

    document.querySelectorAll(".cities").forEach(el => {
        el.addEventListener('click', () => {
            selectCity(el.innerHTML)
            document.querySelector(".city__title").classList.remove("title__active")
            document.querySelector(".second-city__title").style.transform = "translate(-15px, -30px)"
            document.querySelector(".city").classList.remove("show-div")
            document.querySelector(".profile__backdrop").style.zIndex = -1
        })
    })
    document.querySelector(".city").classList.toggle("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = 2
})

const selectCity = (e) => {
    document.querySelector(".city__title").textContent = e
}


document.getElementById("avatar").addEventListener('change', () => {
    const reader = new FileReader()
    let files = document.getElementById('avatar').files
    reader.onload = async (event) => {
        document.querySelector('.profile__avatar__img').src = event.target.result
    }
    reader.readAsDataURL(files[files.length - 1])
    // console.log(document.getElementById("avatar").value)
    Object.assign(document.querySelector(".profile__avatar__img").style, { width: "192px", height: "192px", border: "1px solid #CDDAF1", borderRadius: "16px" });

    document.querySelector(".profile__avatar__input__label").innerHTML = `
    <input type="file" name="" id="avatar">
    <label for="avatar" class="avatar__label flex flex-jc-c flex-ai-c">
        <img src="../../images/085-camera.png" alt="">
        <span>Редактировать фото</span>
    </label>

    <div class="delete-photo__wrap flex flex-jc-c">
        <img src="../../images/trashRed.png" alt="">
        <p>Удалить фото</p>
    </div>
                                
    `
    document.querySelector(".delete-photo__wrap").addEventListener('click', () => {
        document.querySelector('.profile__avatar__img').setAttribute('src', "../../images/008-user-2.png")
        Object.assign(document.querySelector(".profile__avatar__img").style, { height: "60px", width: "60px", border: "none", borderRadius: "0px", objectFit: "contain" });
        document.querySelector(".profile__avatar__input__label").innerHTML = `
        <input type="file" name="" id="avatar">
        <label for="avatar" class="avatar__label flex flex-jc-c flex-ai-c">
            <img src="../../images/085-camera.png" alt="">
            <span>Загрузить фото</span>
        </label>                        
    `
    })
})

const modal = document.querySelector('.profile-modal')
const backdrop = document.querySelector('.profile-backdrop')


const toggleModal = () => {
    modal.classList.toggle('modalActive')
    backdrop.classList.toggle('backdropActive')
    document.body.classList.toggle('hidden')
}

backdrop.addEventListener('click', () => {
    toggleModal()
})
document.getElementById("changePassword").addEventListener('click', () => {
    toggleModal()
})
document.getElementById("canselChangePassword").addEventListener('click', () => {
    toggleModal()
})
document.getElementById("password").addEventListener('input', () => {
    document.getElementById("password__label").style.transform = document.getElementById("password").value == "" ? null : ("translate(-15px, -30px)")
})
document.getElementById("password_eye").addEventListener('click', () => {
    document.getElementById("password").type = document.getElementById("password").type == "text" ? "password" : "text"
    document.getElementById("password_eye").style.opacity = document.getElementById("password").type == "text" ? ".5" : "1"
})

document.getElementById("password1").addEventListener('input', () => {
    document.getElementById("password1__label").style.transform = document.getElementById("password1").value == "" ? null : ("translate(-15px, -30px)")
})
document.getElementById("password_eye1").addEventListener('click', () => {
    document.getElementById("password1").type = document.getElementById("password1").type == "text" ? "password" : "text"
    document.getElementById("password_eye1").style.opacity = document.getElementById("password1").type == "text" ? ".5" : "1"
})

document.getElementById("password2").addEventListener('input', () => {
    document.getElementById("password2__label").style.transform = document.getElementById("password2").value == "" ? null : ("translate(-15px, -30px)")
})
document.getElementById("password_eye2").addEventListener('click', () => {
    document.getElementById("password2").type = document.getElementById("password2").type == "text" ? "password" : "text"
    document.getElementById("password_eye2").style.opacity = document.getElementById("password2").type == "text" ? ".5" : "1"
})

document.querySelector(".profile__backdrop").addEventListener('click', () => {
    document.querySelector(".gender__title").classList.remove("title__active")
    document.querySelector(".gender").classList.remove("show-div")
    document.querySelector(".profile__backdrop").style.zIndex = -1
    document.querySelector(".day-of-birth__title").classList.remove("title__active")
    document.querySelector(".day-of-birth").classList.remove("show-div")
    document.querySelector(".month-of-birth__title").classList.remove("title__active")
    document.querySelector(".month-of-birth").classList.remove("show-div")
    document.querySelector(".year-of-birth__title").classList.remove("title__active")
    document.querySelector(".year-of-birth").classList.remove("show-div")
    document.querySelector(".city__title").classList.remove("title__active")
    document.querySelector(".city").classList.remove("show-div")
    document.querySelector(".region__title").classList.remove("title__active")
    document.querySelector(".region").classList.remove("show-div")
})
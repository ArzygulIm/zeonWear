const inputs = document.querySelectorAll(".input-label__wrap")
const inputAnimate = (inputId, labelId) => {
    document.getElementById(inputId).addEventListener('input', () => {
        document.getElementById(labelId).style.transform = document.getElementById(inputId).value == "" ? null : ("translate(-15px, -30px)")
    })
}
inputs.forEach(el => {
    inputAnimate(el.children[0].id, el.children[1].id)
})

const paswordFunction = (eyeId, inputId) => {
    document.getElementById(eyeId).addEventListener('click', () => {
        document.getElementById(inputId).type = document.getElementById(inputId).type == "text" ? "password" : "text"
        document.getElementById(eyeId).style.opacity = document.getElementById(inputId).type == "text" ? ".5" : "1"
    })
}

const dropdownFunction = (title, dropdown) => {
    document.querySelector(title).addEventListener('click', () => {
        document.querySelector(title).classList.toggle("title__active")
        document.querySelector(dropdown).classList.toggle("show-div")
        document.querySelector(".auth__reg__backdrop").style.zIndex = 2
    })
}
if (document.getElementById("auth")) {
    paswordFunction("auth_eye1", "new-password")
    paswordFunction("auth_eye2", "new-password2")
    paswordFunction("auth_eye", "auth-password")
}

if (document.getElementById("reg")) {
    paswordFunction("password_eye", "password")
    paswordFunction("repeat-password_eye", "repeat-password")
    dropdownFunction(".favorite__sports-title", ".favorite__sports")
    dropdownFunction(".day-of-birth__title", ".day-of-birth")
    dropdownFunction(".month-of-birth__title",".month-of-birth")
    dropdownFunction(".year-of-birth__title",".year-of-birth")   
    dropdownFunction(".gender__title",".gender")
}
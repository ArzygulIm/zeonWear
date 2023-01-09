import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, getDocFromCache } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

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

const modal = document.querySelector('.auth__modal')
const modalButton = document.querySelector('.forgot-password__btn')
const backdrop = document.querySelector('.auth__backdrop')
const content = document.querySelector('.auth__modal-inner')
const authMailInput = document.getElementById("auth-mail")
const authPasswordInput = document.getElementById("auth-password")
const forgotMailInput = document.getElementById("forgot-mail")
const disappear = document.querySelector('.auth__disappear')
let error = false

const signIn = async (password) => {
    const docRef = doc(db, "users", authMailInput.value);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let userData = docSnap.data()
        let password =  userData.password

        if(authPasswordInput.value == password){
            localStorage.setItem('userId', JSON.stringify(authMailInput.value))
        }
        else{
            console.log('wrong mail or password')
        }
    }
}

if(sessionStorage.getItem('e-mail') != ""){
    document.querySelector(".auth__form").classList.remove("show__form")
    document.querySelector(".auth__form").classList.add("hide__form")
    document.querySelector(".forgot-password__form").classList.add("show__form")
    document.getElementById("forgot-mail__label").style.transform = "translate(-15px, -30px)"
    document.getElementById("forgot-mail").value = sessionStorage.getItem('e-mail')
}

document.getElementById("sign-in__btn").addEventListener('click', (e) => {
    e.preventDefault()
    if (authMailInput.value != "" && authPasswordInput.value != "") {
        signIn()
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
    if (forgotMailInput.value == "") {
        error = true
    } else {
        error = false
        
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
    document.getElementById("forgot-mail__label").style.transform = "translate(-15px, -30px)"
    document.getElementById("forgot-mail").value = authMailInput.value
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
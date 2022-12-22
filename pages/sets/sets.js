document.querySelector(".sports__title").addEventListener('click',()=>{
    document.querySelector(".sports").classList.toggle("show-div")
    document.querySelector(".filters").style.height = document.querySelector(".sports").classList.contains("show-div") == true? "280px" : "90px"
})

document.querySelector(".section__filter__menu__title").addEventListener('click',()=>{
    document.querySelector(".section__dropdown").classList.toggle("show-div")
    document.querySelector(".section__dropdown__back").classList.toggle("show-div")
})

document.querySelector(".section__dropdown__back").addEventListener('click',()=>{
    document.querySelector(".section__dropdown").classList.toggle("show-div")
    document.querySelector(".section__dropdown__back").classList.toggle("show-div")
})
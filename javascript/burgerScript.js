const burgerFunc = () =>{
    const burger = document.querySelector('.burger-menu')
    const nav = document.querySelector('.main__nav__items-wrap')
    const navItems = document.querySelectorAll('.main__nav__items')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-burger-btn')
        nav.classList.toggle('show-nav')
    })
    for (let item of navItems){
        item.addEventListener('mouseup', ()=>{
            burger.classList.remove('show-burger-btn')
            nav.classList.remove('show-nav')
        })
    }
}
burgerFunc()
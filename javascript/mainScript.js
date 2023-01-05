const mainCarousel = () => {
    const slides = document.querySelectorAll(".main-carousel__carousel__item");
    const button = document.querySelectorAll(".main-carousel__carousel__button");
    const dots = document.querySelectorAll(".main-carousel__dots")

    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
        if (touchendX < touchstartX) gotoNext()
        if (touchendX > touchstartX) gotoPrev()
    }

    document.querySelector(".main-carousel__carousel__wrap").addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    }, { passive: true })

    document.querySelector(".main-carousel__carousel__wrap").addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })

    let current = 0;
    let prev = 4;
    let next = 1;
    let prevPrev = 3
    let nextNext = 2

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    slides.forEach((el, index) => {
        el.addEventListener('click', () => {
            gotoNum(index)
        })
    })

    dots.forEach((el, index) => {
        el.addEventListener('click', () => {
            gotoNum(index)
        })
    })
    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        dots.forEach(e => e.classList.remove("main-carousel__active-dot"))
        current = number;
        prev = current - 1;
        next = current + 1;
        prevPrev = current - 2
        nextNext = current + 2

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.remove("prev");
            slides[i].classList.remove("next");
            slides[i].classList.remove("prevPrev")
            slides[i].classList.remove("nextNext")
        }

        if (next == 5) {
            next = 0;
            nextNext = 1
        }

        if (prev == -1) {
            prev = 4;
            prevPrev = 3
        }
        if (nextNext == 5) {
            nextNext = 0
        }

        if (prevPrev == -1) {
            prevPrev = 4
        }
        slides[current].classList.add("active");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
        slides[prevPrev].classList.add("prevPrev")
        slides[nextNext].classList.add("nextNext")
        dots[current].classList.add("main-carousel__active-dot")
    }
}
mainCarousel()

const logoCarousel = () => {
    const slides = document.querySelectorAll(".logo-carousel__carousel__item");
    const button = document.querySelectorAll(".logo-carousel__carousel__button");
    const dots = document.querySelectorAll(".logo-carousel__dots")

    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
        if (touchendX < touchstartX) gotoNext()
        if (touchendX > touchstartX) gotoPrev()
    }

    document.querySelector(".logo-carousel__carousel__wrap").addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    }, { passive: true })

    document.querySelector(".logo-carousel__carousel__wrap").addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })

    let first = 0
    let second = first + 1
    let third = second + 1
    let fourth = third + 1
    let fifth = fourth + 1
    let sixth = fifth + 1


    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    }

    slides.forEach((el, index) => {
        el.addEventListener('click', () => {
            gotoNum(index)
        })
    })

    dots.forEach((el, index) => {
        el.addEventListener('click', () => {
            gotoNum(index)
        })
    })
    const gotoPrev = () => first > 0 ? gotoNum(first - 1) : gotoNum(slides.length - 1);

    const gotoNext = () => first < 5 ? gotoNum(first + 1) : gotoNum(0);

    const gotoNum = number => {
        dots.forEach(e => e.classList.remove("logo-carousel__active-dot"))
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("logo-first");
            slides[i].classList.remove("logo-second");
            slides[i].classList.remove("logo-third")
            slides[i].classList.remove("logo-fourth")
            slides[i].classList.remove("logo-fifth")
            slides[i].classList.remove("logo-sixth")
        }

        first = number;
        second = first + 1
        if (first == 5) {
            second = 0
        }
        third = second + 1
        if (second == 5) {
            third = 0
        }
        fourth = third + 1
        if (third == 5) {
            fourth = 0
        }
        fifth = fourth + 1
        if (fourth == 5) {
            fifth = 0
        }
        sixth = fifth + 1
        if (fifth == 5) {
            sixth = 0
        }

        slides[first].classList.add("logo-first");
        slides[second].classList.add("logo-second");
        slides[third].classList.add("logo-third")
        slides[fourth].classList.add("logo-fourth")
        slides[fifth].classList.add("logo-fifth")
        slides[sixth].classList.add("logo-sixth")
        dots[first].classList.add("logo-carousel__active-dot")
    }
}
logoCarousel()
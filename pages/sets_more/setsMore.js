const setsMoreCarousel = () => {
 
    const carouselList = document.querySelector('.sets-more-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.sets-more-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".sets-more-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".sets-more-carousel__carousel__nextBtn")
    const dotsPrevBtn = document.querySelector(".sets-more-carousel__dots__prevBtn")
    const dotsNextBtn = document.querySelector(".sets-more-carousel__dots__nextBtn")
    const carouselDots = document.querySelectorAll(".sets-more-carousel__dots")
    carouselDots.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            console.log("click work");
            carouselDots.forEach(e => e.classList.remove("sets-more-carousel__active-dot"))
            elems.forEach((item, i) => {
                i - index < 0 ? item.dataset.pos = i - index + 6 : item.dataset.pos = i - index
            })
            el.classList.add("sets-more-carousel__active-dot")
        })
    })

    nextBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("sets-more-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 5 : item.dataset.pos = +item.dataset.pos - 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("sets-more-carousel__active-dot") : null
        })

    })
    prevBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("sets-more-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 5 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("sets-more-carousel__active-dot") : null
        })
    })

    dotsNextBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("sets-more-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 5 : item.dataset.pos = +item.dataset.pos - 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("sets-more-carousel__active-dot") : null
        })

    })
    dotsPrevBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("sets-more-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 5 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("sets-more-carousel__active-dot") : null
        })
    })
    const update = function (newActive) {
        const newActivePos = newActive.dataset.pos;
        const first = elems.find((elem) => elem.dataset.pos == 0);
        const second = elems.find((elem) => elem.dataset.pos == 1);
        const third = elems.find((elem) => elem.dataset.pos == 2);
        const fourth = elems.find((elem) => elem.dataset.pos == 3);
        const fifth = elems.find((elem) => elem.dataset.pos == 4);
        const sixth = elems.find((elem) => elem.dataset.pos == 5);

        [first, second, third, fourth, fifth, sixth].forEach(item => {
            var itemPos = item.dataset.pos;
            item.dataset.pos = getPos(itemPos, newActivePos)
        });
    };

    const getPos = function (current, active) {
        const diff = current - active;
        if (diff < 0) {
            return diff + 6
        }
        return diff;
    }
}
setsMoreCarousel()

const mainCarousel = () => {
    const carouselList = document.querySelector('.main-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.main-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".main-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".main-carousel__carousel__nextBtn")
    const carouselDots = document.querySelectorAll(".main-carousel__dots")

    carouselDots.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            carouselDots.forEach(e => e.classList.remove("main-carousel__active-dot"))
            el.classList.add("main-carousel__active-dot")
            elems.forEach((item, i) => {
                i - index > 2 ? item.dataset.pos = i - 5 - index : i - index < -2 ? item.dataset.pos = i + 5 - index : item.dataset.pos = i - index
            })
        })
    })
    carouselList.addEventListener('click', function (event) {
        carouselDots.forEach(e => {
            e.classList.remove("main-carousel__active-dot")
        })
        var newActive = event.target;
        var isItem = newActive.closest('.main-carousel__carousel__item');
        if (!isItem || newActive.classList.contains('main-carousel__item_active')) {
            return;
        };
        update(newActive);
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? carouselDots[index].classList.add("main-carousel__active-dot") : null
        })
        const backDivs = document.querySelectorAll('.main-carousel__carousel__item-back');
        const backElems = Array.from(backDivs);

        elems.forEach((item,index) => {
            backElems[index].dataset.pos = item.dataset.pos
        });
        
    });
    prevBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("main-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == -2 ? item.dataset.pos = 2 : item.dataset.pos = +item.dataset.pos - 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("main-carousel__active-dot") : null
        })
    })
    nextBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("main-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 2 ? item.dataset.pos = -2 : item.dataset.pos = +item.dataset.pos + 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("main-carousel__active-dot") : null
        })        
    })
    const update = function (newActive) {
        const newActivePos = newActive.dataset.pos;
        const current = elems.find((elem) => elem.dataset.pos == 0);
        const prev = elems.find((elem) => elem.dataset.pos == -1);
        const next = elems.find((elem) => elem.dataset.pos == 1);
        const first = elems.find((elem) => elem.dataset.pos == -2);
        const last = elems.find((elem) => elem.dataset.pos == 2);

        current.classList.remove('main-carousel__item_active');

        [current, prev, next, first, last].forEach((item,index) => {
            var itemPos = item.dataset.pos;
            newActivePos !== 0?
            item.dataset.pos = getPos(itemPos, newActivePos): null
            console.log("item Pos: ",itemPos,"new Active Pos: ", newActivePos);
        });
        
    };

    const getPos = function (current, active) {
        const diff = current - active;
        if (current - active > 2) {
            return diff - 5
        } else if (current - active < -2) {
            return diff + 5
        }
        return diff;
    }
}
mainCarousel()

const logoCarousel = () => {
    const carouselList = document.querySelector('.logo-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.logo-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".logo-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".logo-carousel__carousel__nextBtn")
    const carouselDots = document.querySelectorAll(".logo-carousel__dots")

    carouselDots.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            carouselDots.forEach(e => e.classList.remove("logo-carousel__active-dot"))
            elems.forEach((item, i) => {
                i - index < 0 ? item.dataset.pos = i - index + 6 : item.dataset.pos = i - index
            })
            el.classList.add("logo-carousel__active-dot")
        })
    })

    carouselList.addEventListener('click', function (event) {
        carouselDots.forEach(e => {
            e.classList.remove("logo-carousel__active-dot")
        })
        var newActive = event.target;
        var isItem = newActive.closest('.logo-carousel__carousel__item');
        if (!isItem || newActive.classList.contains('logo-carousel__item_active')) {
            return;
        };
        update(newActive);
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? carouselDots[index].classList.add("logo-carousel__active-dot") : null
        })
    });
    prevBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("logo-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 5 : item.dataset.pos = +item.dataset.pos - 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("logo-carousel__active-dot") : null
        })
    })
    nextBtn.addEventListener('click', () => {
        carouselDots.forEach(e => {
            e.classList.remove("logo-carousel__active-dot")
        })
        elems.forEach((item, index) => {
            item.dataset.pos == 5 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
            item.dataset.pos == 0 ? carouselDots[index].classList.add("logo-carousel__active-dot") : null
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
logoCarousel()

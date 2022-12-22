const constructorFirstCarousel = () => {
    const carouselList = document.querySelector('.constructor-f-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.constructor-f-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".constructor-f-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".constructor-f-carousel__carousel__nextBtn")

    carouselList.addEventListener('click', function (event) {
        var newActive = event.target;
        var isItem = newActive.closest('.constructor-f-carousel__carousel__item');
        if (!isItem || newActive.classList.contains('constructor-f-carousel__item_active')) {
            return;
        };
        update(newActive);
    });
    prevBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 4 : item.dataset.pos = +item.dataset.pos - 1
        })
    })
    nextBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 4 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
        })
    })
    const update = function (newActive) {
        const newActivePos = newActive.dataset.pos;
        const first = elems.find((elem) => elem.dataset.pos == 0);
        const second = elems.find((elem) => elem.dataset.pos == 1);
        const third = elems.find((elem) => elem.dataset.pos == 2);
        const fourth = elems.find((elem) => elem.dataset.pos == 3);
        const fifth = elems.find((elem) => elem.dataset.pos == 4);

        [first, second, third, fourth, fifth].forEach(item => {
            var itemPos = item.dataset.pos;
            item.dataset.pos = getPos(itemPos, newActivePos)
        });
    };

    const getPos = function (current, active) {
        const diff = current - active;
        if (diff < 0) {
            return diff + 5
        }
        return diff;
    }
}
constructorFirstCarousel()

const constructorSecondCarousel = () => {
    const carouselList = document.querySelector('.constructor-s-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.constructor-s-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".constructor-s-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".constructor-s-carousel__carousel__nextBtn")

    carouselList.addEventListener('click', function (event) {
        var newActive = event.target;
        var isItem = newActive.closest('.constructor-s-carousel__carousel__item');
        if (!isItem || newActive.classList.contains('constructor-s-carousel__item_active')) {
            return;
        };
        update(newActive);
    });
    prevBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 4 : item.dataset.pos = +item.dataset.pos - 1
        })
    })
    nextBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 4 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
        })
    })
    const update = function (newActive) {
        const newActivePos = newActive.dataset.pos;
        const first = elems.find((elem) => elem.dataset.pos == 0);
        const second = elems.find((elem) => elem.dataset.pos == 1);
        const third = elems.find((elem) => elem.dataset.pos == 2);
        const fourth = elems.find((elem) => elem.dataset.pos == 3);
        const fifth = elems.find((elem) => elem.dataset.pos == 4);

        [first, second, third, fourth, fifth].forEach(item => {
            var itemPos = item.dataset.pos;
            item.dataset.pos = getPos(itemPos, newActivePos)
        });
    };

    const getPos = function (current, active) {
        const diff = current - active;
        if (diff < 0) {
            return diff + 5
        }
        return diff;
    }
}
constructorSecondCarousel()

const constructorThirdCarousel = () => {
    const carouselList = document.querySelector('.constructor-t-carousel__carousel__list');
    const carouselItems = document.querySelectorAll('.constructor-t-carousel__carousel__item');
    const elems = Array.from(carouselItems);
    const prevBtn = document.querySelector(".constructor-t-carousel__carousel__prevBtn")
    const nextBtn = document.querySelector(".constructor-t-carousel__carousel__nextBtn")

    carouselList.addEventListener('click', function (event) {
        var newActive = event.target;
        var isItem = newActive.closest('.constructor-t-carousel__carousel__item');
        if (!isItem || newActive.classList.contains('constructor-t-carousel__item_active')) {
            return;
        };
        update(newActive);
    });
    prevBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 0 ? item.dataset.pos = 4 : item.dataset.pos = +item.dataset.pos - 1
        })
    })
    nextBtn.addEventListener('click', () => {
        elems.forEach((item, index) => {
            item.dataset.pos == 4 ? item.dataset.pos = 0 : item.dataset.pos = +item.dataset.pos + 1
        })
    })
    const update = function (newActive) {
        const newActivePos = newActive.dataset.pos;
        const first = elems.find((elem) => elem.dataset.pos == 0);
        const second = elems.find((elem) => elem.dataset.pos == 1);
        const third = elems.find((elem) => elem.dataset.pos == 2);
        const fourth = elems.find((elem) => elem.dataset.pos == 3);
        const fifth = elems.find((elem) => elem.dataset.pos == 4);

        [first, second, third, fourth, fifth].forEach(item => {
            var itemPos = item.dataset.pos;
            item.dataset.pos = getPos(itemPos, newActivePos)
        });
    };

    const getPos = function (current, active) {
        const diff = current - active;
        if (diff < 0) {
            return diff + 5
        }
        return diff;
    }
}
constructorThirdCarousel()

document.querySelector(".category__title").addEventListener('click', () => {
    document.querySelector(".categories").classList.toggle("show-div")

    if (document.querySelector(".categories").classList.contains("show-div") === true) {
        document.querySelector(".categories__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".categories__wrap").classList.add("zero-height")
    }
})

document.querySelector(".sports__title").addEventListener('click', () => {
    document.querySelector(".sports").classList.toggle("show-div")

    if (document.querySelector(".sports").classList.contains("show-div") === true) {
        document.querySelector(".sports__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".sports__wrap").classList.add("zero-height")
    }
})

document.querySelector(".brand__title").addEventListener('click', () => {
    document.querySelector(".brand").classList.toggle("show-div")

    if (document.querySelector(".brand").classList.contains("show-div") === true) {
        document.querySelector(".brand__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".brand__wrap").classList.add("zero-height")
    }
})

document.querySelector(".price__title").addEventListener('click', () => {
    document.querySelector(".price").classList.toggle("show-div")

    if (document.querySelector(".price").classList.contains("show-div") === true) {
        document.querySelector(".price__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".price__wrap").classList.add("zero-height")
    }
})

document.querySelector(".size__title").addEventListener('click', () => {
    document.querySelector(".size").classList.toggle("show-div")

    if (document.querySelector(".size").classList.contains("show-div") === true) {
        document.querySelector(".size__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".size__wrap").classList.add("zero-height")
    }
})

document.querySelector(".material__title").addEventListener('click', () => {
    document.querySelector(".material").classList.toggle("show-div")

    if (document.querySelector(".material").classList.contains("show-div") === true) {
        document.querySelector(".material__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".material__wrap").classList.add("zero-height")
    }
})

document.querySelector(".color__title").addEventListener('click', () => {
    document.querySelector(".color").classList.toggle("show-div")

    if (document.querySelector(".color").classList.contains("show-div") === true) {
        document.querySelector(".color__wrap").classList.remove("zero-height")
    } else {
        document.querySelector(".color__wrap").classList.add("zero-height")
    }
})

let slider = document.getElementById("range_input")
let selector = document.getElementById("range_selector")

slider.oninput = function(){
    selector.style.left = this.value + "%"
    document.querySelector(".range_beforeBtn").style.width = this.value + "%"
}

document.querySelector(".range_beforeBtn").addEventListener('click',(e)=>{
    console.log(e)
    slider.value = e.layerX
    selector.style.left = e.layerX + "%"
    document.querySelector(".range_beforeBtn").style.width = e.layerX + "%"
})
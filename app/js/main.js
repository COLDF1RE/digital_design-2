//Активный слайд по умолчанию
let slideIndex = 4;

//Автопереключение слайдов через заданный таймер и функция сброса его интервала
let timer = 4000;
let sliderAutoPlay = setInterval("nextSlide()", timer);
function restartSlideAutoPlay() {
    clearInterval(sliderAutoPlay);
    sliderAutoPlay = setInterval("nextSlide()", timer);
}

//Следующий слайд. Вызывает эту функцию стрелка из мобильной версии (атрибут onclick="prevSlide()" в html) и Автопереключение слайдов выше
function nextSlide() {
    //Запуск основной функции с индексом +1
    showSlides(slideIndex += 1);
    restartSlideAutoPlay()
}

//Предыдущий слайд. Вызывает эту функцию стрелка из мобильной версии (атрибут onclick="nextSlide()" в html)
function prevSlide() {
    showSlides(slideIndex -= 1);
    restartSlideAutoPlay()
}

//Устанавливает текущим выбранный слайд. Вызывает функцию кнопки навигации слайдера (атрибут onclick в html)
function currentSlide(n) {
    showSlides(slideIndex = n);
    restartSlideAutoPlay()
}

//Основная функция
function showSlides(n) {
    const slides = document.querySelectorAll(".slider__item");
    const slidesNav = document.querySelectorAll(".slider-nav__item");
    //Бесконечная прокрутка слайдов
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    //Обнуляет стили предыдущего слайда
    for (let slide of slides) {
        slide.classList.remove("slider__item--active")
    }
    // slides.classList.remove("slider__item--active")
    for (let nav of slidesNav) {
        nav.classList.remove("slider-nav__item--active")
    }
    //Применяем стили к текущему слайду
    slides[slideIndex - 1].classList.add("slider__item--active")
    slidesNav[slideIndex - 1].classList.add("slider-nav__item--active")
}

showSlides(slideIndex);
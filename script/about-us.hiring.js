const carousel = document.querySelector('.hiring__cards');
const carouselInner = carousel.querySelector('.hiring__features');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next')

let slidesPerView = getSlidesPerView();
let slides = Array.from('carouselInner.children');
let currentIndex = slidesPerView;

function getSlidesPerView() {
    if (window.innerWidth >= 1000) return 4;
    if (window.innerWidth >= 767) return 2;
    return 1;
}

function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from('carouselInner.children');

    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}


function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

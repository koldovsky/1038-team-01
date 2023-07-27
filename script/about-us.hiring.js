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
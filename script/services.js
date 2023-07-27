const carousel = document.querySelector('.services-animated_carousel');
const carouselInner = carousel.querySelector('.image-container');
const prevButton = carousel.querySelector('.carousel_button--prev');
const nextButton = carousel.querySelector('.carousel_button--next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;

    if (currentIndex === slides.length - slidesPerView) {
        setTimeout(() => {
            currentIndex = slidesPerView;
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
        }, 500);
    }

    if (currentIndex === slidesPerView - 1) {
        setTimeout(() => {
            currentIndex = slides.length - slidesPerView * 2 + 2;
            carouselInner.style.transition = 'none';
            carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
        }, 500);
    }
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - slidesPerView;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > slides.length - slidesPerView) {
        currentIndex = 0;
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});

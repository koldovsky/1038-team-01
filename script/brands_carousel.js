const brands = [
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/vue.svg" alt="VUE"></div>',
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/blink.svg" alt="Blink"></div>',
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/nike.svg" alt="Nike"></div>',
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/the-cw.svg" alt="The CW"></div>',
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/adidas.svg" alt="Adidas"></div>',
    '<div class="brands__carousel-item"><img class="brands__carousel-item-image" src="../img/index/brands/caractere.svg" alt="Caractere"></div>',
];


const carouselSlide = document.querySelector('.brands__carousel-inner');

let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = brands[currentSlide];
    if (window.innerWidth >= 767) {
        const secondSlideIdx = currentSlide + 1 >= brands.length ? 0 : currentSlide + 1;
        carouselSlide.innerHTML += brands[secondSlideIdx];
        const thirdSlideIdx = secondSlideIdx + 1 >= brands.length ? 0 : secondSlideIdx + 1;
        carouselSlide.innerHTML += brands[thirdSlideIdx];  
        if (window.innerWidth >= 992) {
            const fourthSlideIdx = thirdSlideIdx + 1 >= brands.length ? 0 : thirdSlideIdx + 1;
            carouselSlide.innerHTML += brands[fourthSlideIdx];
            const fifthSlideIdx = fourthSlideIdx + 1 >= brands.length ? 0 : fourthSlideIdx + 1;
            carouselSlide.innerHTML += brands[fifthSlideIdx];
        }   
    }
}

renderSlide();

function nextSlide() {
    currentSlide = currentSlide + 1 >= brands.length ? 0 : currentSlide + 1;
    renderSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? brands.length - 1 : currentSlide - 1;
    renderSlide();
}

const btnNext = document.querySelector('.brands__carousel-control-next');
const btnPrev = document.querySelector('.brands__carousel-control-prev');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
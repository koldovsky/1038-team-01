const response = await fetch("../api/about-us.who-we-are.json");
const articles = await response.json();

renderWhoWeAre(articles);

const buttons = document.querySelectorAll('.accordion__item-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.accordion__item-row-container');
        const content = container.querySelector('.accordion__item-content');
        if (button.classList.contains('open')) {
            button.classList.remove('open');
            button.classList.toggle('close');
            content.classList.remove('opencontent');
        } else if (button.classList.contains('close')) {
            button.classList.remove('close');
            button.classList.toggle('open');
            content.classList.toggle('opencontent');
        } else {
            button.classList.toggle('open');
            content.classList.toggle('opencontent');
        }

    })
});

function renderWhoWeAre(articles) {
    const articlesContainer = document.querySelector('.about-us-who-we-are__accordion');
    articlesContainer.innerHTML = "";
    for (const article of articles) {
        articlesContainer.innerHTML += `<div class="accordion__item item">
        <div class="accordion__item-container">
            <img class="item__image" src="${article.image}" alt="${article.alt}">
            <div class="accordion__item-row-container">
                <h3 class="item__header">${article.header}</h3>
                <div class="accordion__item-button">
                    <div class="accordion__item-button-line accordion__item-button-line1"></div>
                    <div class="accordion__item-button-line accordion__item-button-line2" id="line2"></div>
                </div>
                <div class="accordion__item-content">
                    <p>${article.content}</p>
                </div>
            </div>

        </div>
    </div>`
    }
}
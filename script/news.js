const response = await fetch("api/index.news.json");
const articles = await response.json();

renderArticles(articles);

function renderArticles (articles) {
    const articlesContainer = document.querySelector('.news__articles');
    articlesContainer.innerHTML = '';
    for(const article of articles) {
        articlesContainer.innerHTML += `<article class="articles__item">
        <img class="articles__image" src="${article.image}" alt="${article.alt}">
        <p class="articles__date-container">
            <span class="articles__date">${article.date}</span>
        </p>
        <h3 class="articles__title">${article.title}</h3>
        <p class="articles__content">
            ${article.content}
        </p>
        <div class="articles__button-container">
            <a class="articles__button" href="#">Read More</a>
        </div>
    </article>`
    };
};
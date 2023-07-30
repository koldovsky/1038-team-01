const articles = [
    {
        image: 'img/index/news/color-book.png',
        alt: 'Color book',
        date: 'TIPS | 18.10.2022',
        title: 'How Does Color Influence Our Decisions?',
        content: 'The psychology of color is one of the most controversial and interesting marketing aspects, mainly because of the depth of analysis.'
    },
    {
        image: 'img/index/news/designers-at-laptop.png',
        alt: 'Designers working on laptop',
        date: 'TIPS | 18.10.2022',
        title: 'The Importance of Integrated Web Teams',
        content: 'Your engineers can bring you better results! Learn how to improve the engineering department to make a new step for your company growth.'
    },
    {
        image: 'img/index/news/designers-at-board.png',
        alt: 'Two designers at a whiteboard',
        date: 'TIPS | 18.10.2022',
        title: 'On-Time and On-Budget Website Design',
        content: 'When customers pay for a product, they want to be sure of the deadline, especially when the project is large and expensive.'
    }
]

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
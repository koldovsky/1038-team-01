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

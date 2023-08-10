window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

const scrollPosition = localStorage.getItem('scrollPosition');
if (scrollPosition !== null) {
    window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'instant'
    });
    localStorage.removeItem('scrollPosition');
}
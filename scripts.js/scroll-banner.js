const article = document.querySelector('article');

window.addEventListener('scroll', () => {
    if (window.scrollY > article.offsetTop) {
        article.classList.add('scroll-shadow');
    } else {
        article.classList.remove('scroll-shadow');
    }
});

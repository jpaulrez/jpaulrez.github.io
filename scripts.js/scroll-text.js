const bannerText = document.querySelector('.banner-text');
const bannerText2 = document.querySelector('.banner-text2');
const bannerText3 = document.querySelector('.banner-text3');
const bannerText4 = document.querySelector('.banner-text4');
const article = document.querySelector('article');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

observer.observe(bannerText);
observer.observe(bannerText2);
observer.observe(bannerText3);
observer.observe(bannerText4);

window.addEventListener('scroll', () => {
    if (window.scrollY > article.offsetTop) {
        article.classList.add('scroll-shadow');
        bannerText.classList.add('visible');
        bannerText2.classList.add('visible');
        bannerText3.classList.add('visible');
        bannerText4.classList.add('visible');
    } else {
        article.classList.remove('scroll-shadow');
    }
});

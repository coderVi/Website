document.body.style.margin = '0';

let lastScrollTop = 0;
const header = document.querySelector('.header');

// Başlangıçta header'ın rengini belirli bir renk olarak ayarla
header.style.backgroundColor = 'rgb(250, 243, 233)';
header.style.position = 'fixed'; // Sabit kalacak şekilde ayarla

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 250) {
        // Scroll pozisyonu 200px'den büyükse kırmızı renk
        header.style.transition = 'background-color 0.5s';
        header.style.backgroundColor = 'red';
    } else {
        // Scroll pozisyonu 200px'den küçükse orijinal renk
        header.style.transition = 'background-color 0.5s';
        header.style.backgroundColor = 'rgb(250, 243, 233)';
    }

    lastScrollTop = scrollTop;
});

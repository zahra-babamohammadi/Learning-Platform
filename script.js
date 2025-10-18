/***************************
 NavBar
 ****************************/
const navLinks = document.querySelector('.nav__links');
const hamburger = document.querySelector('.hamburger__menu');
const close = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const isopen = navLinks.classList.contains('show');
    close.setAttribute('class', isopen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark');
});

/***************************
 Filter
 ****************************/
const filterBtns = document.querySelectorAll('.filter__btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(filter => {
    filter.addEventListener('click', () => {
        const dataFilter = filter.dataset.filter.toLowerCase();

        filterBtns.forEach(btn => btn.classList.remove('active'));

        filter.classList.add('active');

        cards.forEach(card => {
            const cardCategory = card.dataset.category.toLowerCase();

            if (dataFilter === 'all' || dataFilter === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";

            }
        });
    });
});
/***************************
 Scroll
 ****************************/
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});
/***************************
 Card Counter
 ****************************/
const addButton = document.querySelectorAll('.card__info .btn__primary');
const cartCount = document.querySelector('.cart__count');

let count = localStorage.getItem('cartCount');
if (count) {
    count = parseInt(count);
} else {
    count = 0;
}

cartCount.textContent = count;

addButton.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        localStorage.setItem('cartCount', count);

    });

});
/***************************
 Dark/Light Mode
 ****************************/
const body = document.body;
const toggle = document.querySelector('.toggle__mode');
const icon = toggle.querySelector('i');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark__theme');
    icon.classList.replace('fa-sun', 'fa-moon');
} else {
    icon.classList.replace('fa-moon', 'fa-sun');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark__theme');

    if (body.classList.contains('dark__theme')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {


        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});
/***************************
 Animation
 ****************************/
AOS.init({
    duration: 1000,
    once: true
});
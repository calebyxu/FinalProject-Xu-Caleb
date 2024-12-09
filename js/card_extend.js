/* Event listeners */
/* Card Extension */
function extend(e) {
    e.currentTarget.classList.toggle('extend')
    e.currentTarget.classList.toggle('retract')
}

function scroll(e) {
    if (window.scrollY >= 700 && window.scrollY <= 1000 && flag == 0) {
        cards[0].classList.toggle('extend')
        cards[0].classList.toggle('retract')
        cards[1].classList.toggle('extend')
        cards[1].classList.toggle('retract')
        cards[2].classList.toggle('extend')
        cards[2].classList.toggle('retract')
        flag = 1
    }
    
}

/* Mobile Nav */
function mobileFunction(e) {
    mobileNav.classList.toggle('mobile-extend')
}

/* Define vars */
/* Card Extension */
var flag = 0
const cards = document.querySelectorAll('#description');

for (var i = 0, len = cards.length; i < len; i++) {
    cards[i].addEventListener('click', extend)
}

/* Mobile Nav */
const mobileNav = document.querySelector('nav')
const mobileClose = document.querySelector('#x-icon')
const mobileHamburger = document.querySelector("#mobile-hamburger")
mobileClose.addEventListener('click', mobileFunction)
mobileHamburger.addEventListener('click', mobileFunction)

const scrollTest = window.addEventListener('scroll', scroll)
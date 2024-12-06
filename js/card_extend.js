/* Event listeners */
/* Card Extension */
function extend(e) {
    e.currentTarget.classList.toggle('extend')
    e.currentTarget.classList.toggle('retract')
}

/* Mobile Nav */
function mobileFunction(e) {
    mobileNav.classList.toggle('mobile-extend')
}

/* Define vars */
/* Card Extension */
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


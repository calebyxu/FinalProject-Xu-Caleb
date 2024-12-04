/* Event listeners */
function extend(e) {
    e.currentTarget.classList.toggle('extend')
    e.currentTarget.classList.toggle('retract')
}

/* Define vars */
const cards = document.querySelectorAll('#description');

for (var i = 0, len = cards.length; i < len; i++) {
    cards[i].addEventListener('click', extend)
}


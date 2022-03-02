const hamburger = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

function toggleNav() {
    if (nav.style.visibility === "hidden") {
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
    } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
    }
}

hamburger.addEventListener('click', function() {
    toggleNav();
});

const navLinks = document.querySelectorAll('.nav-link');

for(let i = 0 ; i < navLinks.length ; i++) {
    navLinks[i].addEventListener('click', function() {
        toggleNav();
    });
}
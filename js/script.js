const hamburger = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

// the visibility value was '' upon page loading so I am setting it here before the toggleNav function runs for the first time just to make sure it starts out as "hidden" every time the page loads
nav.style.visibility = 'hidden';

function toggleNav() {
    console.log('HERE!');
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


// Code to make sure nav closes after a link is clicked
const navLinks = document.querySelectorAll('.nav-link');

for(let i = 0 ; i < navLinks.length ; i++) {
    navLinks[i].addEventListener('click', function() {
        toggleNav();
    });
}
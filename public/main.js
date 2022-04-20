// Sticky Navbar
var navbar = document.querySelector('nav')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        "@1.50": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});


function openCity(evt, cityName) {
    // document.getElementById("defaultOpen").click();
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

document.getElementById("defaultOpen").click();
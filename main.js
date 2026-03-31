// Contact Popup logic
var closeButton = document.querySelector(".closeButton");
var popup = document.querySelector(".Popup");
var contactButton = document.querySelector(".contact-button")

closeButton.addEventListener("click", () => {
    popup.classList.add("hidden");
});

contactButton.addEventListener('click', () => {
    popup.classList.remove("hidden");
})

// Typewriter effect
var typeWriter = document.querySelector(".typewriter-text");
var i = 0;
var txt = "Development, Solutions, Analysis. All in one place!";
var speed = 40;

function typeWriterEffect() {
    if (i < txt.length) {
        typeWriter.innerHTML += txt[i];
        i++;
        setTimeout(typeWriterEffect, speed);
    }
};

window.addEventListener("load", typeWriterEffect);

// navigations
const navLinks = document.querySelectorAll(".nav-link");

//Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault;

        //Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block:'start'
            })
        }
    })
})
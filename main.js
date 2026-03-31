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
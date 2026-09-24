// Contact Popup logic
const closeButton = document.querySelector(".closeButton");
const popup = document.querySelector(".Popup");
const contactButton = document.querySelector(".contact-button");

if (closeButton && popup) {
    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
}

if (contactButton && popup) {
    contactButton.addEventListener('click', () => {
        popup.classList.remove("hidden");
    });
}

// Close popup on backdrop click or ESC key
if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popup.classList.contains("hidden")) {
            popup.classList.add("hidden");
        }
    });
}

// Rotating Typewriter effect
const typeWriterElement = document.querySelector(".typewriter-text");
const phrases = [
    "Chartered Accountant & Software Engineer",
    "Building Autonomous AI Agents in Rust",
    "Engineering LLMs & Transformers from Scratch",
    "Full-Stack Web & Financial Automation",
    "Systems Programming & Modern UI"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 25;
const delayBetweenPhrases = 1800;

function handleTypewriter() {
    if (!typeWriterElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        typeWriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(handleTypewriter, delayBetweenPhrases);
            return;
        }
        setTimeout(handleTypewriter, typingSpeed);
    } else {
        typeWriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(handleTypewriter, 350);
            return;
        }
        setTimeout(handleTypewriter, deletingSpeed);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    handleTypewriter();
});

// Smooth Navigation Scrolling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px'
});

// Observe contact cards
const contactCards = document.querySelectorAll("#contact .contact-card");
contactCards.forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.15}s`);
    observer.observe(card);
});

// Observe project grid boxes
const projectGridBoxes = document.querySelectorAll(".project-grid-box");
projectGridBoxes.forEach((box, index) => {
    box.style.setProperty('--delay', `${index * 0.12}s`);
    observer.observe(box);
});

// Observe service cards
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.12}s`);
    observer.observe(card);
});

// Observe skill grid boxes
const skillGridBoxes = document.querySelectorAll(".skill-grid-box");
skillGridBoxes.forEach((box, index) => {
    observer.observe(box);
});
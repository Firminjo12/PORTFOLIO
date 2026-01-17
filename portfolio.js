// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
// Sélectionne tous les éléments qui ont la classe 'reveal' afin de s'assurer que
// les sections (y compris la section contact) soient prises en compte.
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

            // Si c'est une barre de compétence, on anime la largeur
            if (el.classList.contains('skill-card')) {
                const progressBars = el.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.parentElement.previousElementSibling.querySelector('span:last-child').innerText;
                    bar.style.width = width;
                });
            }
        }
    });
};

// Initial calls
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    // S'assurer que les éléments sont cachés au début si on veut l'effet reveal
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });
    revealOnScroll();
});

// Form submission Enhancement with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Envoi en cours...';
        btn.disabled = true;

        const formData = new FormData(this);

        try {
            // Utiliser l'URL d'action du formulaire (définie dans le HTML) pour éviter les placeholders
            // Ex: <form action="https://formspree.io/f/mykkkopy" ...>
            const endpoint = this.action || 'https://formspree.io/f/VOTRE_ID_FORMSPREE';
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Merci Firmin ! Votre message a été envoyé avec succès.');
                contactForm.reset();
            } else {
                alert('Oups ! Un problème est survenu lors de l\'envoi.');
            }
        } catch (error) {
            alert('Erreur de connexion. Veuillez réessayer plus tard.');
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    });
}
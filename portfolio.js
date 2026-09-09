const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const header = document.querySelector('header');
const yearEl = document.getElementById('year');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const btn = this.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Envoi en cours...';
        btn.disabled = true;

        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                alert('Merci ! Votre message a bien été envoyé.');
                contactForm.reset();
            } else {
                alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
            }
        } catch (error) {
            alert('Le formulaire est temporairement indisponible. Réessayez plus tard.');
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('.hero .btn');
    if (heroButton) {
        heroButton.addEventListener('click', e => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            contactSection && contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const header = document.querySelector('.site-header');
    if (header) {
        document.body.style.paddingTop = header.offsetHeight + 'px';
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    document.querySelectorAll('.supplier').forEach(details => {
        const filter = details.querySelector('.filter');
        const items = details.querySelectorAll('li');
        filter && filter.addEventListener('input', () => {
            const term = filter.value.toLowerCase();
            items.forEach(li => {
                li.style.display = li.textContent.toLowerCase().includes(term) ? '' : 'none';
            });
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault();
            }
        });
    }

    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

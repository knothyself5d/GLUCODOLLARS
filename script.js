// ===============================
// MOBILE MENU
// ===============================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbarMenu = document.querySelector('.navbar-menu');

if (mobileMenuBtn && navbarMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navbarMenu.style.display === 'flex';
        navbarMenu.style.display = isOpen ? 'none' : 'flex';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu) {
            navbarMenu.style.display = 'none';
        }
    });
});


// ===============================
// SMOOTH SCROLL TO CONTACT
// ===============================
function scrollToContact() {
    const contact = document.getElementById('contact');
    if (contact) {
        contact.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


// CTA BUTTONS
const heroSellBtn = document.getElementById('hero-sell-btn');
const navSellBtn = document.getElementById('nav-sell-btn');
const pricingSellBtn = document.getElementById('pricing-sell-btn');

if (heroSellBtn) heroSellBtn.addEventListener('click', scrollToContact);
if (navSellBtn) navSellBtn.addEventListener('click', scrollToContact);
if (pricingSellBtn) pricingSellBtn.addEventListener('click', scrollToContact);


// ===============================
// FAQ ACCORDION
// ===============================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h4');
    const answer = item.querySelector('p');

    if (!question || !answer) return;

    // hide answers by default
    answer.style.display = 'none';
    question.style.cursor = 'pointer';

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        // close all
        document.querySelectorAll('.faq-item p').forEach(p => {
            p.style.display = 'none';
        });

        // reopen if it wasn't open
        answer.style.display = isOpen ? 'none' : 'block';
    });
});


// ===============================
// CONTACT FORM
// ===============================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Submitted ✓';
        submitBtn.disabled = true;

        setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}


// ===============================
// SCROLL ANIMATIONS
// ===============================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

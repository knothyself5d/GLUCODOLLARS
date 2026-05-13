// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbarMenu = document.querySelector('.navbar-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scroll to contact form for CTA buttons
function smoothScrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hero CTA button - Smooth scroll to contact form
const heroSellBtn = document.getElementById('hero-sell-btn');
if (heroSellBtn) {
    heroSellBtn.addEventListener('click', smoothScrollToContact);
}

// Nav CTA button - Smooth scroll to contact form
const navSellBtn = document.getElementById('nav-sell-btn');
if (navSellBtn) {
    navSellBtn.addEventListener('click', smoothScrollToContact);
}

// Pricing card CTA button - Smooth scroll to contact form
const pricingSellBtn = document.getElementById('pricing-sell-btn');
if (pricingSellBtn) {
    pricingSellBtn.addEventListener('click', smoothScrollToContact);
}

// Custom quote button - Smooth scroll to contact form
const customQuoteBtn = document.getElementById('custom-quote-btn');
if (customQuoteBtn) {
    customQuoteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollToContact();
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faq-question').classList.remove('active');
                item.querySelector('.faq-answer').classList.remove('open');
            }
        });
        
        // Toggle current FAQ
        if (isActive) {
            question.classList.remove('active');
            answer.classList.remove('open');
        } else {
            question.classList.add('active');
            answer.classList.add('open');
        }
    });
});

// Form submissions
const contactForm = document.getElementById('contact-form');

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        supplies: formData.get('supplies'),
        quantity: formData.get('quantity'),
        condition: formData.get('condition')
    };
    
    // Here you would send data to your backend
    console.log('Form submitted:', data);
    
    // Show success message
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Quote Submitted!';
    submitBtn.style.background = '#65D6A4';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        e.target.reset();
    }, 2000);
}

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navbarMenu && navbarMenu.style.display === 'flex') {
                navbarMenu.style.display = 'none';
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

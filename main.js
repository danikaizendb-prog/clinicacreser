document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle & Auto-Close on Link Click ---
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    
    const closeMobileMenu = () => {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileBtn ? mobileBtn.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    };

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile drawer when any navigation link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --- Smooth FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // --- Privacy Policy Modal (LFPDPPP / NOM-004 Compliance) ---
    const privacyModal = document.getElementById('privacy-modal');
    const openPrivacyBtn = document.getElementById('open-privacy-modal');
    const closePrivacyBtn = document.getElementById('close-privacy-modal');

    if (privacyModal && openPrivacyBtn && closePrivacyBtn) {
        openPrivacyBtn.addEventListener('click', () => {
            privacyModal.classList.add('active');
            privacyModal.setAttribute('aria-hidden', 'false');
        });

        closePrivacyBtn.addEventListener('click', () => {
            privacyModal.classList.remove('active');
            privacyModal.setAttribute('aria-hidden', 'true');
        });

        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                privacyModal.classList.remove('active');
                privacyModal.setAttribute('aria-hidden', 'true');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
                privacyModal.classList.remove('active');
                privacyModal.setAttribute('aria-hidden', 'true');
            }
        });
    }
});

// --- Preloader Logic (Fast and reliable for optimal Core Web Vitals) ---
const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
    }
};

window.addEventListener('load', () => {
    setTimeout(hidePreloader, 150);
});

setTimeout(hidePreloader, 500);

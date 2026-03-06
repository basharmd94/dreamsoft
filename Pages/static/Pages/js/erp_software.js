/**
 * ERP Software Page — DreamSoft
 * Scroll-reveal animations (GSAP + ScrollTrigger) & FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.erp-hero .hero-content', {
        scrollTrigger: { trigger: '.erp-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.erp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.erp-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // Introduction
    gsap.from('.erp-intro-header', {
        scrollTrigger: { trigger: '.erp-intro-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.erp-intro-content', {
        scrollTrigger: { trigger: '.erp-intro-section', start: 'top 70%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.erp-intro-image', {
        scrollTrigger: { trigger: '.erp-intro-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    gsap.from('.erp-stat-item', {
        scrollTrigger: { trigger: '.erp-intro-stats', start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power3.out',
    });

    // What is ERP
    gsap.from('.erp-what-image', {
        scrollTrigger: { trigger: '.erp-what-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.erp-what-content', {
        scrollTrigger: { trigger: '.erp-what-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    // Best ERP
    gsap.from('.erp-best-header', {
        scrollTrigger: { trigger: '.erp-best-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.erp-best-card', {
        scrollTrigger: { trigger: '.erp-best-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // ERP Meaning
    gsap.from('.erp-meaning-header', {
        scrollTrigger: { trigger: '.erp-meaning-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.erp-meaning-card', {
        scrollTrigger: { trigger: '.erp-meaning-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Key Features
    gsap.from('.erp-features-header', {
        scrollTrigger: { trigger: '.erp-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.erp-feature-card', {
        scrollTrigger: { trigger: '.erp-features-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    });

    // Industry Sections
    const industries = ['food', 'hotel', 'agro', 'pharma', 'chemical'];
    industries.forEach(ind => {
        gsap.from(`.erp-industry--${ind} .erp-industry-content`, {
            scrollTrigger: { trigger: `.erp-industry--${ind}`, start: 'top 75%' },
            opacity: 0, x: -40, duration: 0.8, ease: 'power3.out',
        });
        gsap.from(`.erp-industry--${ind} .erp-industry-image`, {
            scrollTrigger: { trigger: `.erp-industry--${ind}`, start: 'top 75%' },
            opacity: 0, x: 40, duration: 0.8, delay: 0.15, ease: 'power3.out',
        });
    });

    // Why Choose
    gsap.from('.erp-why-image', {
        scrollTrigger: { trigger: '.erp-why-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.erp-why-content', {
        scrollTrigger: { trigger: '.erp-why-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
    gsap.from('.erp-why-checklist li', {
        scrollTrigger: { trigger: '.erp-why-checklist', start: 'top 85%' },
        opacity: 0, x: -20, duration: 0.4, stagger: 0.06, ease: 'power3.out',
    });

    // Final CTA
    gsap.from('.erp-final-cta', {
        scrollTrigger: { trigger: '.erp-cta-section', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    });

    // FAQ
    gsap.from('.erp-faq-header', {
        scrollTrigger: { trigger: '.erp-faq-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });
    gsap.from('.erp-faq-item', {
        scrollTrigger: { trigger: '.erp-faq-list', start: 'top 80%' },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Final Thoughts
    gsap.from('.erp-thoughts-content', {
        scrollTrigger: { trigger: '.erp-thoughts-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });
    gsap.from('.erp-thoughts-visual', {
        scrollTrigger: { trigger: '.erp-thoughts-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    /* ─── FAQ Accordion ─── */
    const faqItems = document.querySelectorAll('.erp-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.erp-faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('is-open');
                    other.querySelector('.erp-faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', !isOpen);
        });
    });
});

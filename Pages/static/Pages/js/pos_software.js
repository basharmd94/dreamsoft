/**
 * POS Software Page — DreamSoft
 * Scroll-reveal animations (GSAP + ScrollTrigger) & FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.pos-hero .hero-content', {
        scrollTrigger: { trigger: '.pos-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.pos-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.pos-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Introduction
    gsap.from('.pos-intro-header', {
        scrollTrigger: { trigger: '.pos-intro-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-intro-content', {
        scrollTrigger: { trigger: '.pos-intro-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.pos-intro-image', {
        scrollTrigger: { trigger: '.pos-intro-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.pos-stat-item', {
        scrollTrigger: { trigger: '.pos-intro-stats', start: 'top 85%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // What is POS
    gsap.from('.pos-what-image', {
        scrollTrigger: { trigger: '.pos-what-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.pos-what-content', {
        scrollTrigger: { trigger: '.pos-what-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // How It Works
    gsap.from('.pos-process-header', {
        scrollTrigger: { trigger: '.pos-process-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-process-step', {
        scrollTrigger: { trigger: '.pos-process-steps', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Key Features
    gsap.from('.pos-features-header', {
        scrollTrigger: { trigger: '.pos-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-feature-card', {
        scrollTrigger: { trigger: '.pos-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
    });

    // Billing & Inventory
    gsap.from('.pos-billing-header', {
        scrollTrigger: { trigger: '.pos-billing-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-billing-card', {
        scrollTrigger: { trigger: '.pos-billing-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Industries
    gsap.from('.pos-industries-header', {
        scrollTrigger: { trigger: '.pos-industries-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-industry-card', {
        scrollTrigger: { trigger: '.pos-industries-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Why Choose DreamSoft
    gsap.from('.pos-why-image', {
        scrollTrigger: { trigger: '.pos-why-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.pos-why-content', {
        scrollTrigger: { trigger: '.pos-why-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.pos-why-checklist li', {
        scrollTrigger: { trigger: '.pos-why-checklist', start: 'top 85%' },
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power3.out',
    });

    // Success Stories
    gsap.from('.pos-success-header', {
        scrollTrigger: { trigger: '.pos-success-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-success-card', {
        scrollTrigger: { trigger: '.pos-success-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Final CTA
    gsap.from('.pos-final-cta', {
        scrollTrigger: { trigger: '.pos-cta-section', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
    });

    // FAQ
    gsap.from('.pos-faq-header', {
        scrollTrigger: { trigger: '.pos-faq-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.pos-faq-item', {
        scrollTrigger: { trigger: '.pos-faq-list', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Final Thoughts
    gsap.from('.pos-thoughts-content', {
        scrollTrigger: { trigger: '.pos-thoughts-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.pos-thoughts-visual', {
        scrollTrigger: { trigger: '.pos-thoughts-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    /* ─── FAQ Accordion ─── */
    const faqItems = document.querySelectorAll('.pos-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.pos-faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('is-open');
                    other.querySelector('.pos-faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', !isOpen);
        });
    });
});

/**
 * Inventory Management Software Page — DreamSoft
 * Scroll-reveal animations (GSAP + ScrollTrigger) & FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.inv-hero .hero-content', {
        scrollTrigger: { trigger: '.inv-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.inv-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.inv-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Introduction section
    gsap.from('.inv-intro-header', {
        scrollTrigger: { trigger: '.inv-intro-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.inv-intro-content', {
        scrollTrigger: { trigger: '.inv-intro-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.inv-intro-image', {
        scrollTrigger: { trigger: '.inv-intro-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.inv-stat-item', {
        scrollTrigger: { trigger: '.inv-intro-stats', start: 'top 85%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // What is Inventory Management
    gsap.from('.inv-what-image', {
        scrollTrigger: { trigger: '.inv-what-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.inv-what-content', {
        scrollTrigger: { trigger: '.inv-what-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // How It Works — Process Steps
    gsap.from('.inv-process-header', {
        scrollTrigger: { trigger: '.inv-process-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.inv-process-step', {
        scrollTrigger: { trigger: '.inv-process-steps', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Key Features Grid
    gsap.from('.inv-features-header', {
        scrollTrigger: { trigger: '.inv-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.inv-feature-card', {
        scrollTrigger: { trigger: '.inv-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
    });

    // Benefits Section
    gsap.from('.inv-benefits-content', {
        scrollTrigger: { trigger: '.inv-benefits-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.inv-benefits-visual', {
        scrollTrigger: { trigger: '.inv-benefits-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.inv-benefits-list li', {
        scrollTrigger: { trigger: '.inv-benefits-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Industries Section
    gsap.from('.inv-industries-header', {
        scrollTrigger: { trigger: '.inv-industries-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.inv-industry-card', {
        scrollTrigger: { trigger: '.inv-industries-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Why Choose DreamSoft
    gsap.from('.inv-why-image', {
        scrollTrigger: { trigger: '.inv-why-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.inv-why-content', {
        scrollTrigger: { trigger: '.inv-why-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.inv-why-list li', {
        scrollTrigger: { trigger: '.inv-why-list', start: 'top 85%' },
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power3.out',
    });

    // Final CTA
    gsap.from('.inv-final-cta', {
        scrollTrigger: { trigger: '.inv-cta-section', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
    });

    // FAQ Section
    gsap.from('.inv-faq-header', {
        scrollTrigger: { trigger: '.inv-faq-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.inv-faq-item', {
        scrollTrigger: { trigger: '.inv-faq-list', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    /* ─── FAQ Accordion ─── */
    const faqItems = document.querySelectorAll('.inv-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.inv-faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('is-open');
                    other.querySelector('.inv-faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', !isOpen);
        });
    });
});

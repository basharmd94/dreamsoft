/**
 * Supershop POS Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── GSAP + ScrollTrigger Animations ─── */

    // Hero
    gsap.from('.sp-hero .hero-content', {
        scrollTrigger: { trigger: '.sp-hero', start: 'top 85%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.sp-hero', start: 'top 85%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
    });

    // Why POS section
    gsap.from('.sp-why-section .section-heading', {
        scrollTrigger: { trigger: '.sp-why-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.sp-why-content', {
        scrollTrigger: { trigger: '.sp-why-section', start: 'top 70%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-why-image', {
        scrollTrigger: { trigger: '.sp-why-section', start: 'top 70%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    // Check list items
    gsap.from('.sp-check-list li', {
        scrollTrigger: { trigger: '.sp-check-list', start: 'top 80%' },
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.sp-features-header', {
        scrollTrigger: { trigger: '.sp-features-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.sp-feature-card', {
        scrollTrigger: { trigger: '.sp-features-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Tips section
    gsap.from('.sp-tips-content', {
        scrollTrigger: { trigger: '.sp-tips-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-tips-image', {
        scrollTrigger: { trigger: '.sp-tips-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.sp-tips-list li', {
        scrollTrigger: { trigger: '.sp-tips-list', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Trust section (Pre-sale / Post-sale blocks)
    gsap.from('.sp-trust-header', {
        scrollTrigger: { trigger: '.sp-trust-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.sp-trust-block', {
        scrollTrigger: { trigger: '.sp-trust-grid', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Growth section
    gsap.from('.sp-growth-content', {
        scrollTrigger: { trigger: '.sp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-growth-image', {
        scrollTrigger: { trigger: '.sp-growth-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    gsap.from('.sp-growth-list li', {
        scrollTrigger: { trigger: '.sp-growth-list', start: 'top 80%' },
        opacity: 0,
        x: -25,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    gsap.from('.sp-gradient-banner', {
        scrollTrigger: { trigger: '.sp-banner-section', start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-faq-header', {
        scrollTrigger: { trigger: '.sp-faq-section', start: 'top 75%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
    });

    gsap.from('.sp-faq-item', {
        scrollTrigger: { trigger: '.sp-faq-list', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // CTA
    gsap.from('.sp-cta-content', {
        scrollTrigger: { trigger: '.sp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.sp-cta-visual', {
        scrollTrigger: { trigger: '.sp-cta-section', start: 'top 75%' },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
    });

    const faqItems = document.querySelectorAll('.sp-faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.sp-faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('is-open');
                    other.querySelector('.sp-faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', !isOpen);
        });
    });
});

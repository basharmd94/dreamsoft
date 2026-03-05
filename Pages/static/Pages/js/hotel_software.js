/**
 * Hotel Management Software Page — DreamSoft
 * Scroll-reveal animations powered by GSAP + ScrollTrigger
 */

document.addEventListener('DOMContentLoaded', () => {

    // Hero
    gsap.from('.ht-hero .hero-content', {
        scrollTrigger: { trigger: '.ht-hero', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ht-hero .hero-image-wrapper', {
        scrollTrigger: { trigger: '.ht-hero', start: 'top 85%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.2, ease: 'power3.out',
    });

    // Why section
    gsap.from('.ht-why-section .section-heading', {
        scrollTrigger: { trigger: '.ht-why-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ht-why-content', {
        scrollTrigger: { trigger: '.ht-why-section', start: 'top 70%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ht-why-image', {
        scrollTrigger: { trigger: '.ht-why-section', start: 'top 70%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ht-check-list li', {
        scrollTrigger: { trigger: '.ht-check-list', start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Features Grid
    gsap.from('.ht-features-header', {
        scrollTrigger: { trigger: '.ht-features-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ht-feature-card', {
        scrollTrigger: { trigger: '.ht-features-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.07, ease: 'power3.out',
    });

    // Benefits
    gsap.from('.ht-benefits-header', {
        scrollTrigger: { trigger: '.ht-benefits-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ht-benefit-card', {
        scrollTrigger: { trigger: '.ht-benefits-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // Trust section
    gsap.from('.ht-trust-header', {
        scrollTrigger: { trigger: '.ht-trust-section', start: 'top 75%' },
        opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
    });

    gsap.from('.ht-trust-block', {
        scrollTrigger: { trigger: '.ht-trust-grid', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.15, ease: 'power3.out',
    });

    // Growth section
    gsap.from('.ht-growth-content', {
        scrollTrigger: { trigger: '.ht-growth-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ht-growth-image', {
        scrollTrigger: { trigger: '.ht-growth-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });

    gsap.from('.ht-growth-list li', {
        scrollTrigger: { trigger: '.ht-growth-list', start: 'top 80%' },
        opacity: 0, x: -25, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    });

    // CTA
    gsap.from('.ht-cta-content', {
        scrollTrigger: { trigger: '.ht-cta-section', start: 'top 75%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
    });

    gsap.from('.ht-cta-visual', {
        scrollTrigger: { trigger: '.ht-cta-section', start: 'top 75%' },
        opacity: 0, x: 50, duration: 0.8, delay: 0.15, ease: 'power3.out',
    });
});
